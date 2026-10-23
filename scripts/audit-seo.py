"""Audit the actual sitemap, rendered HTML and assets; does not request indexing."""
import argparse
import json
import re
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import parse_qs, urlparse
import xml.etree.ElementTree as ET

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.meta, self.links, self.headings, self.schemas = {}, [], [], []
        self.title, self.lang, self.text = "", "", ""
        self.capture = None
        self.images = []
        self.anchors = []
        self.errors = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html": self.lang = a.get("lang")
        if tag == "meta":
            key = a.get("name", a.get("property", ""))
            if key in self.meta and key != "og:locale:alternate": self.errors.append("duplicate meta: " + key)
            self.meta[key] = a.get("content", "")
        if tag == "link": self.links.append(a)
        if tag == "a": self.anchors.append(a.get("href", ""))
        if tag == "img": self.images.append(a)
        if tag in ("title", "h1") or (tag == "script" and a.get("type") == "application/ld+json"):
            self.capture, self.text = tag, ""
    def handle_data(self, data):
        if self.capture: self.text += data
    def handle_endtag(self, tag):
        if tag != self.capture: return
        if tag == "title": self.title = self.text
        if tag == "h1": self.headings.append(self.text)
        if tag == "script": self.schemas.append(json.loads(self.text))
        self.capture = None

def fetch(url):
    with urlopen(Request(url, headers={"User-Agent": "AgroEscudo-SEO-QA/1.0"}), timeout=45) as response:
        return response.status, response.read(), response.headers.get("Content-Type", "")

def audit(base):
    sitemap_status, xml, _ = fetch(base + "/sitemap.xml")
    urls = [el.text for el in ET.fromstring(xml).findall("{*}url/{*}loc")]
    def page(url):
        path = urlparse(url).path or "/"
        status, body, _ = fetch(base + path)
        parsed = Page(); parsed.feed(body.decode())
        canonical = [a.get("href") for a in parsed.links if a.get("rel") == "canonical"]
        errors = list(parsed.errors)
        if status != 200: errors.append("HTTP != 200")
        if len(canonical) != 1 or canonical[0].rstrip("/") != url.rstrip("/"): errors.append("canonical mismatch")
        if len(parsed.headings) != 1: errors.append("expected one H1")
        if not parsed.title or not parsed.meta.get("description"): errors.append("missing title/description")
        if "noindex" in parsed.meta.get("robots", ""): errors.append("noindex")
        expected_lang = {"/en": "en", "/pt": "pt-BR", "/qu": "qu-BO"}.get(path, "es-BO")
        if parsed.lang != expected_lang: errors.append("incorrect server HTML language")
        missing_alt = [i.get("src") for i in parsed.images if "alt" not in i]
        if missing_alt: errors.append("images missing alt")
        types = []
        for schema in parsed.schemas:
            for obj in schema if isinstance(schema, list) else [schema]:
                types.append(obj.get("@type"))
        return dict(url=url, status=status, title=parsed.title, description=parsed.meta.get("description"), canonical=canonical,
                    lang=parsed.lang, h1=parsed.headings, schemaTypes=types,
                    ogImage=parsed.meta.get("og:image"), images=[parse_qs(urlparse(i.get("src", "")).query).get("url", [i.get("src", "")])[0] for i in parsed.images],
                    internalLinks=sum(h.startswith(("/", "#", "https://agroescudo.vercel.app")) for h in parsed.anchors), errors=errors)
    pages = list(ThreadPoolExecutor(6).map(page, urls))
    for field in ("title", "description"):
        values = [p[field] for p in pages]
        if len(set(values)) != len(values): raise AssertionError("Duplicate " + field)
    assets = {}
    image_paths = {path for p in pages for path in p["images"] if path.startswith("/")}
    paths = image_paths | {"/favicon.ico", "/favicon-48.png", "/favicon-96.png", "/apple-touch-icon.png", "/images/agroescudo-logo-512.png", "/images/agroescudo-social.png"}
    for path in sorted(paths):
        try:
            status, body, content_type = fetch(base + path)
            assets[path] = dict(status=status, bytes=len(body), type=content_type)
        except Exception as exc: assets[path] = dict(error=str(exc))
    _, robots, _ = fetch(base + "/robots.txt")
    return dict(base=base, sitemapStatus=sitemap_status, routes=pages, assets=assets, robots=robots.decode())

if __name__ == "__main__":
    parser = argparse.ArgumentParser(); parser.add_argument("base"); parser.add_argument("output")
    args = parser.parse_args()
    result = audit(args.base.rstrip("/"))
    Path(args.output).parent.mkdir(parents=True, exist_ok=True)
    Path(args.output).write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(dict(routes=len(result["routes"]), errors=[p for p in result["routes"] if p["errors"]]), ensure_ascii=False))
    if any(p["errors"] for p in result["routes"]) or any(a.get("status") != 200 for a in result["assets"].values()): raise SystemExit(1)
