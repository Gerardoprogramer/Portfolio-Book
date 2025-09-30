import { Heart } from "lucide-react"

import { BookHeader } from "../components/header/BookHeader"
import { EpilogueHistory } from "./epilogueHistory/EpilogueHistory"
import { ContactButtons } from "./contact/ContactButtons"
import { Downloads } from "../components/download/Downloads"

export function BookContact() {
  return (
    <section id="epilogo" className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-9xl font-playfair text-emerald-500">📚</div>
        <div className="absolute bottom-20 right-20 text-6xl font-playfair text-emerald-600">✨</div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <BookHeader title="Epílogo: El Final es Solo el Comienzo" />

        <div className="book-page p-12 rounded-lg text-center">
          <div className="max-w-2xl mx-auto space-y-8">

            <EpilogueHistory
              capitular="📚 Aquí termina mi historia actual, pero podemos escribir una nueva juntos"
              narrative="Cada proyecto es una nueva aventura, cada desafío una oportunidad de crecimiento. Si tienes una idea que
              necesita cobrar vida digital, o si buscas un desarrollador apasionado para tu equipo, me encantaría ser
              parte de tu próximo capítulo."
              cita='"El mejor código es aquel que resuelve problemas reales y mejora la vida de las personas. Esa es mi
                filosofía, esa es mi misión."'
            />

            <ContactButtons />

            {/* Download CV button */}
            <Downloads downloadName="Descargar CV" file="/CV_GerardoAlonsoMartinezMonge.pdf" />

            {/* Final message */}
            <div className="pt-8 border-t border-emerald-600/30">
              <p className="text-zinc-400 font-merriweather text-sm flex items-center justify-center gap-2">
                Hecho con <Heart className="h-4 w-4 text-red-500 animate-pulse" /> y mucho café
              </p>
              <p className="text-zinc-500 text-xs mt-2">© 2025 Gerardo Martínez. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}