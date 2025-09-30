import { additionalSkills } from "@/books/data/skills/AdditionalSkills.data"

export const AdditionalSkills = () => {
  return (
    <div className="mt-12 text-center">
      <div className="book-page p-8 rounded-lg max-w-4xl mx-auto">
        <h4 className="text-xl font-playfair font-bold text-zinc-100 mb-4">Metodologías y Soft Skills</h4>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {additionalSkills.map((category, idx) => (
            <div key={idx} className="space-y-2">
              <h5 className="font-semibold text-emerald-400">{category.title}</h5>
              <ul className="text-zinc-300 space-y-1">
                {category.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
