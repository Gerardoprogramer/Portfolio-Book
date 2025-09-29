import { Calendar, MapPin } from "lucide-react"
import { experiences } from "@/books/data/experiences/Experiences.data"
import { BookHeader } from "../components/header/BookHeader"

export function BookExperiences() {
  return (
    <section id="capitulo-1" className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">

        <BookHeader 
        title=" Capítulo I: La Cronología de mi Carrera"
        subtitle='Un viaje a través del tiempo, donde cada experiencia ha sido una página importante en mi historia
            profesional.'
        />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 timeline-dot rounded-full hidden md:block"></div>

                <div className="md:ml-20">
                  <div className="book-page p-8 rounded-lg hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="md:w-1/4">
                        <div className="inline-flex items-center gap-2 bg-emerald-500 text-zinc-950 px-4 py-2 rounded-full font-semibold mb-4">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>

                      <div className="md:w-3/4">
                        <h3 className="text-2xl font-playfair font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors">
                          {exp.title}
                        </h3>

                        <div className="flex items-center gap-4 mb-4 text-emerald-500">
                          <span className="font-semibold">{exp.company}</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-zinc-300 font-merriweather leading-relaxed mb-6">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-zinc-800 text-emerald-400 rounded-full text-sm border border-emerald-600/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
