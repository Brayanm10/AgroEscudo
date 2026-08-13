"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function DocumentLanguage() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname === "/en" ? "en" : pathname === "/pt" ? "pt-BR" : pathname === "/qu" ? "qu-BO" : "es-BO";
  }, [pathname]);

  return null;
}
