"use client"

import { useI18n } from "@/components/i18n/I18nProvider"

export default function LanguageSelector({ compact = false }: { compact?: boolean }) {
    const { locale, setLocale, t } = useI18n()

    const base = "inline-flex items-center justify-center rounded-md border transition-colors"
    const size = compact ? "h-8 w-8 text-base" : "h-9 w-9 text-lg"
    const active = "border-[#64ffda] text-[#64ffda] bg-[#64ffda]/10"
    const inactive = "border-[#233554] text-[#ccd6f6] hover:text-[#64ffda] hover:border-[#64ffda]"

    return (
        <div className={`flex items-center gap-2 ${compact ? "" : "ml-4"}`} role="group" aria-label={t("selector.label")}>
            <button
                type="button"
                className={`${base} ${size} ${locale === "en" ? active : inactive}`}
                onClick={() => setLocale("en")}
                title={t("selector.en")}
                aria-pressed={locale === "en"}
            >
                <span className="text-lg" aria-hidden>
                    🇬🇧
                </span>
                <span className="sr-only">{t("selector.en")}</span>
            </button>
            <button
                type="button"
                className={`${base} ${size} ${locale === "de" ? active : inactive}`}
                onClick={() => setLocale("de")}
                title={t("selector.de")}
                aria-pressed={locale === "de"}
            >
                <span className="text-lg" aria-hidden>
                    🇩🇪
                </span>
                <span className="sr-only">{t("selector.de")}</span>
            </button>
        </div>
    )
}
