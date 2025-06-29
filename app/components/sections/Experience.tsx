import { useState } from "react"
import experienceData from "@/src/data/experience.json"

export default function Experience() {
  const [activeJob, setActiveJob] = useState(0)

  return (
    <section id="experience" className="py-24">
      <h2 className="text-[#ccd6f6] text-2xl md:text-3xl font-bold mb-12 flex items-center">
        <span className="text-[#64ffda] font-mono text-lg md:text-xl mr-3">02.</span>
        {experienceData.title}
        <div className="ml-8 h-px bg-[#233554] flex-1"></div>
      </h2>

      <div className="flex flex-col md:flex-row">
        <div className="flex md:flex-col mb-8 md:mb-0 md:mr-8 overflow-x-auto md:overflow-visible">
          {experienceData.jobs.map((job, index) => (
            <button
              key={job.company}
              onClick={() => setActiveJob(index)}
              className={`px-4 py-3 text-left whitespace-nowrap border-l-2 md:border-l-2 md:border-b-0 border-b-2 transition-all text-sm ${
                index === activeJob
                  ? "border-[#64ffda] text-[#64ffda] bg-[#64ffda]/10"
                  : "border-[#233554] text-[#8892b0] hover:text-[#64ffda] hover:bg-[#64ffda]/5"
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div className="flex-1">
          {experienceData.jobs[activeJob] && (
            <>
              <h3 className="text-[#ccd6f6] text-lg md:text-xl font-medium mb-2">
                {experienceData.jobs[activeJob].position}{" "}
                <a
                  href={experienceData.jobs[activeJob].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:underline"
                >
                  @ {experienceData.jobs[activeJob].company}
                </a>
              </h3>
              <p className="font-mono text-sm text-[#8892b0] mb-6">
                {experienceData.jobs[activeJob].startDate} - {experienceData.jobs[activeJob].endDate}
              </p>

              <div className="space-y-4">
                {experienceData.jobs[activeJob].responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-[#64ffda] mr-3 mt-2 text-sm">▹</span>
                    <p className="text-sm md:text-base">{responsibility}</p>
                  </div>
                ))}
              </div>

              {experienceData.jobs[activeJob].reference && (
                <div className="mt-6">
                  <a
                    href={experienceData.jobs[activeJob].reference}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#64ffda] hover:text-[#64ffda]/80 transition-colors text-sm"
                  >
                    <span className="mr-2">📄</span>
                    View Reference
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
} 