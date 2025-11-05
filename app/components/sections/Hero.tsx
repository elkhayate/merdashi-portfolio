import { Button } from "@/components/ui/button"
import { useI18n } from "@/components/i18n/I18nProvider"
import { useI18nData } from "@/src/i18n/useI18nData"

export default function Hero() {
  const { personal } = useI18nData()
  const { t } = useI18n()
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center">
      <p className="text-[#64ffda] font-mono text-base mb-5">{personal.tagline}</p>
      <h1 className="text-[#ccd6f6] text-4xl md:text-5xl lg:text-7xl font-bold mb-4">{personal.name}.</h1>
      <h2 className="text-[#8892b0] text-3xl md:text-4xl lg:text-6xl font-bold mb-6">{personal.title}</h2>
      <p className="text-lg max-w-2xl mb-12 leading-relaxed">{personal.description}</p>
      <Button
        variant="outline"
        className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 w-fit px-8 py-4 text-base"
        onClick={() => (window.location.href = `mailto:${personal.email}`)}
      >
        {t("hero.cta")}
      </Button>
    </section>
  )
}
