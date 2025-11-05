"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import en from "@/src/i18n/locales/en.json"
import de from "@/src/i18n/locales/de.json"

export type Locale = "en" | "de"
type Dict = Record<string, any>

const dictionaries: Record<Locale, Dict> = { en, de }

type I18nContextType = {
    locale: Locale
    setLocale: (l: Locale) => void
    t: (key: string, fallback?: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

function getCookie(name: string): string | undefined {
    if (typeof document === "undefined") return undefined
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))
    return match ? decodeURIComponent(match[2]) : undefined
}

function setCookie(name: string, value: string, days = 365) {
    if (typeof document === "undefined") return
    const d = new Date()
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`
}

function getByPath(obj: any, path: string): any {
    return path.split(".").reduce((acc: any, part: string) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj)
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const initialLocale: Locale = useMemo(() => {
        if (typeof window === "undefined") return "en"
        const fromCookie = getCookie("locale") as Locale | undefined
        const fromStorage = (window.localStorage.getItem("locale") as Locale | null) || undefined
        const navLang = typeof navigator !== "undefined" ? navigator.language : "en"
        return fromCookie ?? fromStorage ?? (navLang.toLowerCase().startsWith("de") ? "de" : "en")
    }, [])

    const [locale, setLocaleState] = useState<Locale>(initialLocale)

    useEffect(() => {
        if (typeof document !== "undefined") {
            document.documentElement.lang = locale
        }
        try {
            window.localStorage.setItem("locale", locale)
        } catch { }
        setCookie("locale", locale)
    }, [locale])

    const value = useMemo<I18nContextType>(() => {
        return {
            locale,
            setLocale: (l: Locale) => setLocaleState(l),
            t: (key: string, fallback?: string) => {
                const dict = dictionaries[locale]
                const val = getByPath(dict, key)
                return (typeof val === "string" ? val : undefined) ?? fallback ?? key
            },
        }
    }, [locale])

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
    const ctx = useContext(I18nContext)
    if (!ctx) {
        throw new Error("useI18n must be used within I18nProvider")
    }
    return ctx
}
