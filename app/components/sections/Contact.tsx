import { Button } from "@/components/ui/button"
import { useI18n } from "@/components/i18n/I18nProvider"
import { useI18nData } from "@/src/i18n/useI18nData"

export default function Contact() {
  const { t } = useI18n()
  const { contact, personal } = useI18nData()
  return (
    <section id="contact" className="py-24 text-center">
      <p className="text-[#64ffda] font-mono text-base mb-5">{t("contact.preTitle")}</p>
      <h2 className="text-[#ccd6f6] text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{contact.title}</h2>
      <p className="text-base md:text-lg mb-12 leading-relaxed">{contact.description}</p>
      <Button
        variant="outline"
        className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base"
        onClick={() => (window.location.href = `mailto:${personal.email}`)}
      >
        {contact.buttonText}
      </Button>
    </section>
  )
}
