import { BookTitle } from "./titles/BookTitle"
import { DecorativeElements } from "./decorative/DecorativeElements"
import { ScrollButton } from '@/books/pages/cover/scroll/ScrollButton'
import { ScrollIndicator } from '@/books/pages/cover/scroll/ScrollIndicator'

export function BookCover() {
  const scrollToPrologo = () => {
    document.getElementById("prologo")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="portada"
      className="min-h-screen bg-zinc-950 flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative elements */}
      <DecorativeElements />

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        {/* Book title effect */}
        <BookTitle title="Gerardo Martínez Monge" subtitle=" Desarrollador Fullstack | Programador TI" />

        {/* Bookmark-style button */}
        <ScrollButton title="Comenzar Lectura" onClick={scrollToPrologo} />

        {/* Scroll indicator */}
        <ScrollIndicator/>
      </div>
    </section>
  )
}
