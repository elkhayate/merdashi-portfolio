import { Button } from "@/components/ui/button"
import contactData from "@/src/data/contact.json"
import personalData from "@/src/data/personal.json"

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <p className="text-[#64ffda] font-mono text-base mb-5">04. What's Next?</p>
      <h2 className="text-[#ccd6f6] text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{contactData.title}</h2>
      <p className="text-base md:text-lg mb-12 leading-relaxed">{contactData.description}</p>
      <Button
        variant="outline"
        className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base"
        onClick={() => (window.location.href = `mailto:${personalData.email}`)}
      >
        {contactData.buttonText}
      </Button>
    </section>
  )
} 