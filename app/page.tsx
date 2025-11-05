"use client"

import { useState, useEffect } from "react"
import { Github, Instagram, Twitter, Linkedin, ExternalLink, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

// Import JSON data
import { useI18n } from "@/components/i18n/I18nProvider"
import { useI18nData } from "@/src/i18n/useI18nData"
import LanguageSelector from "@/components/i18n/LanguageSelector"
import socialData from "@/src/i18n/data/en/social.json"

// Dynamically import sections
const Hero = dynamic(() => import("@/app/components/sections/Hero"), {
  loading: () => <div className="min-h-screen" />
})

const About = dynamic(() => import("@/app/components/sections/About"), {
  loading: () => <div className="py-24" />
})

const Experience = dynamic(() => import("@/app/components/sections/Experience"), {
  loading: () => <div className="py-24" />
})

const Work = dynamic(() => import("@/app/components/sections/Work"), {
  loading: () => <div className="py-24" />
})

const Contact = dynamic(() => import("@/app/components/sections/Contact"), {
  loading: () => <div className="py-24" />
})

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useI18n()
  const { personal } = useI18nData()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "work", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <Github className="w-5 h-5 hover:text-[#64ffda] hover:-translate-y-1 transition-all cursor-pointer" />
      case "instagram":
        return <Instagram className="w-5 h-5 hover:text-[#64ffda] hover:-translate-y-1 transition-all cursor-pointer" />
      case "twitter":
        return <Twitter className="w-5 h-5 hover:text-[#64ffda] hover:-translate-y-1 transition-all cursor-pointer" />
      case "linkedin":
        return <Linkedin className="w-5 h-5 hover:text-[#64ffda] hover:-translate-y-1 transition-all cursor-pointer" />
      default:
        return (
          <ExternalLink className="w-5 h-5 hover:text-[#64ffda] hover:-translate-y-1 transition-all cursor-pointer" />
        )
    }
  }

  return (
    <div className="bg-[#0a192f] text-[#8892b0] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a192f]/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="w-12 h-12 border-2 border-[#64ffda] rounded-sm flex items-center justify-center">
            <span className="text-[#64ffda] font-mono text-xl font-bold">{personal.name.charAt(0)}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-sm hover:text-[#64ffda] transition-colors">
              <span className="text-[#64ffda] font-mono text-xs mr-1">01.</span>
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm hover:text-[#64ffda] transition-colors"
            >
              <span className="text-[#64ffda] font-mono text-xs mr-1">02.</span>
              {t("nav.experience")}
            </button>
            <button onClick={() => scrollToSection("work")} className="text-sm hover:text-[#64ffda] transition-colors">
              <span className="text-[#64ffda] font-mono text-xs mr-1">03.</span>
              {t("nav.work")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm hover:text-[#64ffda] transition-colors"
            >
              <span className="text-[#64ffda] font-mono text-xs mr-1">04.</span>
              {t("nav.contact")}
            </button>
            <>
              <Button
                variant="outline"
                className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 ml-4"
                onClick={() => window.open(personal.resumeUrl, "_blank")}
              >
                {t("nav.resume")}
              </Button>
              <LanguageSelector />
            </>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#64ffda] hover:text-[#64ffda]/80 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#112240] border-t border-[#233554]">
            <div className="flex flex-col space-y-4 p-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm hover:text-[#64ffda] transition-colors"
              >
                <span className="text-[#64ffda] font-mono text-xs mr-2">01.</span>
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-sm hover:text-[#64ffda] transition-colors"
              >
                <span className="text-[#64ffda] font-mono text-xs mr-2">02.</span>
                {t("nav.experience")}
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-left text-sm hover:text-[#64ffda] transition-colors"
              >
                <span className="text-[#64ffda] font-mono text-xs mr-2">03.</span>
                {t("nav.work")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-sm hover:text-[#64ffda] transition-colors"
              >
                <span className="text-[#64ffda] font-mono text-xs mr-2">04.</span>
                {t("nav.contact")}
              </button>
              <Button
                variant="outline"
                className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 w-fit"
                onClick={() => {
                  window.open(personal.resumeUrl, "_blank")
                  setIsMobileMenuOpen(false)
                }}
              >
                {t("nav.resume")}
              </Button>
              <div className="pt-2">
                <LanguageSelector compact />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Social Links */}
      <div className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-40">
        {socialData.links.slice(0, 4).map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
            {getSocialIcon(social.name)}
          </a>
        ))}
        <div className="w-px h-24 bg-[#8892b0]"></div>
      </div>

      {/* Email */}
      <div className="fixed right-6 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-40">
        <a
          href={`mailto:${personal.email}`}
          className="writing-mode-vertical text-sm hover:text-[#64ffda] hover:-translate-y-1 transition-all cursor-pointer"
        >
          {personal.email}
        </a>
        <div className="w-px h-24 bg-[#8892b0]"></div>
      </div>

      <main className="max-w-7xl mx-auto px-6 lg:px-24">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />

        {/* Footer */}
        <footer className="py-8 text-center">
          <p className="text-xs md:text-sm">
            {t("footer.builtBy").replace("{name}", personal.name)}{" "}
            <a
              href="https://github.com/elkhayate/merdashi-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64ffda] hover:text-[#64ffda]/80 transition-colors"
            >
              GitHub
            </a>
          </p>
        </footer>
      </main>
    </div>
  )
}
