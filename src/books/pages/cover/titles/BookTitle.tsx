import { type book } from '@/books/data/books/BookTitle.interface'
import { BookOpen } from "lucide-react"

export function BookTitle({ title, subtitle }: book) {
  return (
    <div className="mb-12">
      <div className="relative inline-block">
        {/* Glow effect behind text */}
        <div className="absolute inset-0 blur-3xl bg-emerald-500/10 rounded-full"></div>
        <div className="mb-8 flex justify-center">
          <BookOpen className="h-12 w-12 text-emerald-500 animate-pulse" />
        </div>
        <div className="relative p-12 book-page rounded-lg border border-emerald-500/20 shadow-2xl">
          {/* Top ornament */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500"></div>
            <div className="w-2 h-2 bg-emerald-500 rotate-45"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-zinc-100 mb-6 leading-none tracking-tight">
            {title}
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-emerald-500"></div>
            <div className="w-3 h-3 border-2 border-emerald-500 rotate-45"></div>
            <div className="h-px w-16 bg-emerald-500"></div>
          </div>

          <p className="text-2xl md:text-3xl font-merriweather text-emerald-500 font-light tracking-wider mb-4">
            {subtitle[0]}
          </p>
          <p className="text-lg md:text-xl font-merriweather text-emerald-600/80 font-light italic">
            {subtitle[1]}
          </p>

          {/* Bottom ornament */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500"></div>
            <div className="w-2 h-2 bg-emerald-500 rotate-45"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500"></div>
          </div>
        </div>
      </div>
    </div>
  )
}