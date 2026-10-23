"""Build small web icons and a social card from the existing official shield."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
# The old shield PNG contains a baked checkerboard. Extract the same official
# shield from the clean horizontal logo instead of redesigning it.
shield = Image.open(PUBLIC / "images/logo-horizontal-clean.webp").convert("RGBA").crop((16, 16, 320, 400))
shield.thumbnail((370, 440), Image.Resampling.LANCZOS)
# A white tile preserves contrast on light and dark browser chrome.
tile = Image.new("RGBA", (512, 512), "white")
tile.alpha_composite(shield, ((512 - shield.width) // 2, (512 - shield.height) // 2))
tile.convert("RGB").quantize(colors=256).save(PUBLIC / "images/agroescudo-logo-512.png", optimize=True)
for size, name in [(48, "favicon-48.png"), (96, "favicon-96.png"), (180, "apple-touch-icon.png")]:
    tile.resize((size, size), Image.Resampling.LANCZOS).convert("RGB").save(PUBLIC / name)
tile.save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

card = Image.new("RGB", (1200, 630), "#063b27")
draw = ImageDraw.Draw(card)
draw.rectangle((0, 610, 1200, 630), fill="#efb94e")
card.paste(tile.resize((300, 300), Image.Resampling.LANCZOS).convert("RGB"), (70, 165))
font_root = Path("C:/Windows/Fonts")
def font(size, bold=False):
    return ImageFont.truetype(str(font_root / ("arialbd.ttf" if bold else "arial.ttf")), size)
draw.text((420, 145), "AgroEscudo", font=font(66, True), fill="white")
draw.text((424, 250), "El escudo digital", font=font(38), fill="white")
draw.text((424, 302), "del agro boliviano", font=font(38), fill="white")
draw.text((424, 398), "Monitoreo inteligente de silos", font=font(30, True), fill="#f2c66d")
draw.text((424, 460), "Bolivia", font=font(25), fill="white")
card.save(PUBLIC / "images/agroescudo-social.png", optimize=True)
print("Generated official icons and 1200x630 social card")
