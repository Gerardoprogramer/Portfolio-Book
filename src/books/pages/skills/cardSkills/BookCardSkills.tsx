import { skillCategories } from "@/books/data/skills/Skills.data"

export const BookCardSkills = () => {
  return (
            <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <div key={categoryIndex} className="book-page p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-600/20 rounded-lg">
                    <CategoryIcon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-zinc-100">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon
                    return (
                      <div
                        key={skillIndex}
                        className="px-4 py-2.5 bg-zinc-800/50 border border-emerald-600/30 rounded-lg hover:bg-zinc-800 hover:border-emerald-500/50 hover:scale-105 transition-all duration-300 group flex items-center gap-2"
                        style={{
                          animation: `fadeInUp 0.5s ease-out ${skillIndex * 0.05}s both`,
                        }}
                      >
                        <SkillIcon className="w-4 h-4 text-emerald-500/70 group-hover:text-emerald-400 transition-colors" />
                        <span className="font-merriweather text-zinc-200 text-sm group-hover:text-emerald-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Decorative quote for each category */}
                <div className="mt-6 pt-6 border-t border-emerald-600/30">
                  <p className="text-emerald-400 font-merriweather italic text-sm text-center">
                    {categoryIndex === 0 && "• La interfaz es el primer capítulo que lee el usuario •"}
                    {categoryIndex === 1 && "• El backend es el corazón que late en silencio •"}
                    {categoryIndex === 2 && "• Las herramientas correctas hacen la diferencia •"}
                    {categoryIndex === 3 && "• La versatilidad abre nuevos horizontes •"}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
  )
}
