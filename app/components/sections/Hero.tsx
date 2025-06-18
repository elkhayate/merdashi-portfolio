import { Button } from "@/components/ui/button"
import personalData from "@/src/data/personal.json"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center">
      <p className="text-[#64ffda] font-mono text-base mb-5">{personalData.tagline}</p>
      <h1 className="text-[#ccd6f6] text-4xl md:text-5xl lg:text-7xl font-bold mb-4">{personalData.name}.</h1>
      <h2 className="text-[#8892b0] text-3xl md:text-4xl lg:text-6xl font-bold mb-6">{personalData.title}</h2>
      <p className="text-lg max-w-2xl mb-12 leading-relaxed">{personalData.description}</p>
      <Button
        variant="outline"
        className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 w-fit px-8 py-4 text-base"
        onClick={() => (window.location.href = `mailto:${personalData.email}`)}
      >
        Get in touch
      </Button>
    </section>
  )
} 