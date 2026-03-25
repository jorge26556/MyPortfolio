"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-border/50 bg-muted/50 p-0.5">
      <button
        onClick={() => setLang("es")}
        className={cn(
          "rounded-md px-2.5 py-1 text-xs font-medium transition-all duration-200",
          lang === "es"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Cambiar a español"
      >
        ES
      </button>
      <button
        onClick={() => setLang("en")}
        className={cn(
          "rounded-md px-2.5 py-1 text-xs font-medium transition-all duration-200",
          lang === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
