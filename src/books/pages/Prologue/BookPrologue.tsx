import { BookAvatar } from "./avatar/BookAvatar"
import { NarrativePrologue } from './narrative/NarrativePrologue'
import { BookHeader } from "../components/header/BookHeader"

export function BookPrologue() {
  return (
    <section id="prologo" className="py-20 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6">

        <BookHeader title="Prólogo" />

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <BookAvatar avatar='Avatar.png' name='Gerardo' />

          <NarrativePrologue
            capitular="En las páginas que siguen, encontrarás la historia de un desarrollador apasionado por crear soluciones digitales
              que marquen la diferencia. Cada línea de código escrita, cada proyecto completado, representa un capítulo
              en esta aventura tecnológica."
            narrative=" Mi viaje comenzó con la curiosidad de entender cómo funcionan las cosas, y se ha convertido en una misión
              de construir experiencias digitales excepcionales que conecten personas y resuelvan problemas reales."
            cita='"El código es poesía, y cada proyecto es una nueva estrofa en la sinfonía del desarrollo."'
          />
        </div>
      </div>
    </section>
  )
}