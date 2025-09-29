import { BookHeader } from "../components/header/BookHeader"
import { projects } from "@/books/data/projects/projects.data"
import { ProjectCard } from "./projectCard/ProjectCard"
import { usePaginating } from "@/books/hooks/usePaginating"
import { Paginating } from "../components/paginating/Paginating";


export function BookProjects() {

  const { currentPage, currentProjects, setCurrentPage, totalPages } = usePaginating(projects);

  return (
    <section id="capitulo-2" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">

        <BookHeader
          title="Capítulo II: Mis Creaciones Digitales"
          subtitle="Cada proyecto es una página en mi libro de experiencias, donde el código se convierte en soluciones reales."
        />

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <Paginating currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />

        <div className="text-center mt-12">
          <p className="text-zinc-400 font-merriweather italic">
            📖 "Cada línea de código cuenta una historia, cada proyecto resuelve un problema real"
          </p>
        </div>
      </div>
    </section>
  )
}
