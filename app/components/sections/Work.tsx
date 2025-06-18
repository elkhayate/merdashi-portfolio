import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import projectsData from "@/src/data/projects.json"
import socialData from "@/src/data/social.json"

export default function Work() {
  return (
    <section id="work" className="py-24">
      <h2 className="text-[#ccd6f6] text-2xl md:text-3xl font-bold mb-12 flex items-center">
        <span className="text-[#64ffda] font-mono text-lg md:text-xl mr-3">03.</span>
        {projectsData.title}
        <div className="ml-8 h-px bg-[#233554] flex-1"></div>
      </h2>

      <div className="space-y-24">
        {projectsData.featured.map((project, index) => (
          <div
            key={project.title}
            className={`grid md:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? "md:dir-rtl" : ""}`}
          >
            <div className={`md:col-span-7 relative group ${index % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="relative z-10 rounded-lg overflow-hidden">
                <div className="relative">
                  {project.image ? (
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg transition-all duration-300 border-2 border-[#64ffda]"
                      />
                      <div className="absolute inset-0 bg-[#64ffda] mix-blend-multiply opacity-80 group-hover:opacity-0 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-[#0a192f] mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-[#64ffda] to-[#4a9b8e] flex items-center justify-center rounded-lg border-2 border-[#64ffda]">
                      <span className="text-[#0a192f] text-2xl md:text-4xl font-bold">{project.title}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute top-5 left-5 w-full h-full border-2 border-[#64ffda] rounded-lg -z-10 group-hover:top-3 group-hover:left-3 transition-all duration-300"></div>
            </div>

            <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1 md:text-left" : "md:text-right"}`}>
              <p className="text-[#64ffda] font-mono text-sm mb-2">Featured Project</p>
              <h3 className="text-[#ccd6f6] text-xl md:text-2xl font-bold mb-4">{project.title}</h3>
              <div
                className={`bg-[#112240] p-4 md:p-6 rounded-lg mb-4 relative z-10 ${index % 2 === 1 ? "md:-mr-16" : "md:-ml-16"}`}
              >
                <p className="text-sm md:text-base">{project.description}</p>
              </div>
              <div
                className={`flex flex-wrap gap-3 md:gap-4 mb-4 font-mono text-xs md:text-sm ${index % 2 === 1 ? "justify-start" : "justify-start md:justify-end"}`}
              >
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
              <div className={`flex gap-4 ${index % 2 === 1 ? "justify-start" : "justify-start md:justify-end"}`}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 hover:text-[#64ffda] cursor-pointer" />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 hover:text-[#64ffda] cursor-pointer" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Button
          variant="outline"
          className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"
          onClick={() => (window.location.href = socialData.links[0].url)}
        >
          Show More
        </Button>
      </div>
    </section>
  )
} 