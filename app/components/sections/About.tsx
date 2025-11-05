import Image from "next/image"
import { useI18nData } from "@/src/i18n/useI18nData"

export default function About() {
  const { about, personal } = useI18nData()
  return (
    <section id="about" className="py-24">
      <h2 className="text-[#ccd6f6] text-2xl md:text-3xl font-bold mb-12 flex items-center">
        <span className="text-[#64ffda] font-mono text-lg md:text-xl mr-3">01.</span>
        {about.title}
        <div className="ml-8 h-px bg-[#233554] flex-1"></div>
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-base md:text-lg">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
          <div className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
            {about.technologies.map((tech, index) => (
              <div key={index} className="flex items-center">
                <span className="text-[#64ffda] mr-2">▹</span>
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="relative z-10 rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src={personal.profileImage || "/placeholder.svg"}
                alt={personal.name}
                width={300}
                height={300}
                className="w-full h-full object-cover transition-all duration-300 border-2 border-[#64ffda] rounded-lg"
              />
              <div className="absolute inset-0 bg-[#64ffda] mix-blend-multiply opacity-80 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[#0a192f] mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="absolute top-5 left-5 w-full h-full border-2 border-[#64ffda] rounded-lg -z-10 group-hover:top-3 group-hover:left-3 transition-all duration-300"></div>
        </div>
      </div>
    </section>
  )
}
