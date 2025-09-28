import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function BookPrologue() {
  return (
    <section id="prologo" className="py-20 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-zinc-100 mb-4 chapter-marker">Prólogo</h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="book-page p-8 rounded-lg">
            <div className="relative">
              <Avatar className="w-48 h-48 mx-auto mb-6 border-4 border-emerald-600 shadow-2xl">
                <AvatarImage src="Avatar.png" alt="Tu Nombre" />
                <AvatarFallback className="text-4xl font-playfair bg-emerald-500 text-zinc-950">TN</AvatarFallback>
              </Avatar>

              {/* Decorative frame corners */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-emerald-600"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-emerald-600"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-emerald-600"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-emerald-600"></div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg font-merriweather text-zinc-200 leading-relaxed">
              <span className="text-4xl font-playfair text-emerald-500 float-left mr-2 leading-none">E</span>n las
              páginas que siguen, encontrarás la historia de un desarrollador apasionado por crear soluciones digitales
              que marquen la diferencia. Cada línea de código escrita, cada proyecto completado, representa un capítulo
              en esta aventura tecnológica.
            </p>

            <p className="text-lg font-merriweather text-zinc-300 leading-relaxed">
              Mi viaje comenzó con la curiosidad de entender cómo funcionan las cosas, y se ha convertido en una misión
              de construir experiencias digitales excepcionales que conecten personas y resuelvan problemas reales.
            </p>

            <div className="border-l-4 border-emerald-600 pl-6 py-4 bg-zinc-800/50 rounded-r-lg">
              <p className="text-emerald-400 font-merriweather italic">
                "El código es poesía, y cada proyecto es una nueva estrofa en la sinfonía del desarrollo."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}