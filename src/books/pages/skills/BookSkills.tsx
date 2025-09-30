
import { BookHeader } from "../components/header/BookHeader"
import { AdditionalSkills } from "./cardSkills/additionalSkills/AdditionalSkills"
import { BookCardSkills } from "./cardSkills/BookCardSkills"


export function BookSkills() {
  return (
    <section id="capitulo-3" className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">

        <BookHeader
          title="Capítulo III: Mi Arsenal Tecnológico"
          subtitle="Una bibliografía de las tecnologías que domino, cada una aprendida a través de proyectos reales y desafíos
            superados."
        />

        <BookCardSkills/>

        {/* Additional skills section */}
        <AdditionalSkills/>

      </div>
    </section>
  )
}
