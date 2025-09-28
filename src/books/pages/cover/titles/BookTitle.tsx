import {type book} from '@/books/data/books/BookTitle.interface'

export function BookTitle({title, subtitle}: book) {
  return (
    <div className="inline-block p-8 book-page rounded-lg mb-8">
      <h1 className="text-6xl md:text-8xl font-playfair font-bold text-zinc-100 mb-4 leading-tight">
        {title}
      </h1>
      <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
      <p className="text-xl md:text-2xl font-merriweather text-emerald-500 font-light tracking-wide">
       {subtitle}
      </p>
    </div>
  )
}