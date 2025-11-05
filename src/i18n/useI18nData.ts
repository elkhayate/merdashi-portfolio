"use client"

import { useMemo } from "react"
import { useI18n } from "@/components/i18n/I18nProvider"

// EN data (to be added under src/i18n/data/en/*.json)
import aboutEn from "@/src/i18n/data/en/about.json"
import personalEn from "@/src/i18n/data/en/personal.json"
import experienceEn from "@/src/i18n/data/en/experience.json"
import projectsEn from "@/src/i18n/data/en/projects.json"
import contactEn from "@/src/i18n/data/en/contact.json"

// DE data (to be added under src/i18n/data/de/*.json)
import aboutDe from "@/src/i18n/data/de/about.json"
import personalDe from "@/src/i18n/data/de/personal.json"
import experienceDe from "@/src/i18n/data/de/experience.json"
import projectsDe from "@/src/i18n/data/de/projects.json"
import contactDe from "@/src/i18n/data/de/contact.json"

export function useI18nData() {
    const { locale } = useI18n()

    const data = useMemo(() => {
        if (locale === "de") {
            return {
                about: aboutDe,
                personal: personalDe,
                experience: experienceDe,
                projects: projectsDe,
                contact: contactDe,
            }
        }
        return {
            about: aboutEn,
            personal: personalEn,
            experience: experienceEn,
            projects: projectsEn,
            contact: contactEn,
        }
    }, [locale])

    return data
}

export type I18nData = ReturnType<typeof useI18nData>
