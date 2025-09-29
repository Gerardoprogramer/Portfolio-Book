import { Button } from "@/components/ui/button"
import { Github, Eye } from "lucide-react"
import { type project } from "@/books/data/projects/projects.data"

interface Props {
    project: project
}
export function ProjectCard({ project }: Props) {
    return (
        <div
            className="book-page p-6 rounded-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
        >
            {/* Project image */}
            <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
            </div>

            {/* Project content */}
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-playfair font-bold text-zinc-100 mb-1 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-emerald-500 font-merriweather italic text-sm">{project.subtitle}</p>
                </div>

                <p className="text-zinc-300 font-merriweather text-sm leading-relaxed">{project.description}</p>

                {/* Problem & Solution */}
                <div className="space-y-3 text-sm">
                    <div className="border-l-2 border-red-500 pl-3">
                        <span className="text-red-400 font-semibold">Problema:</span>
                        <p className="text-zinc-400">{project.problem}</p>
                    </div>
                    <div className="border-l-2 border-emerald-500 pl-3">
                        <span className="text-emerald-400 font-semibold">Solución:</span>
                        <p className="text-zinc-400">{project.solution}</p>
                    </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="px-2 py-1 bg-zinc-800 text-emerald-400 rounded text-xs border border-emerald-600/30"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-4">
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-zinc-950 bg-transparent"
                        asChild
                    >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            Código
                        </a>
                    </Button>
                    <Button size="sm" className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-zinc-950" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <Eye className="h-4 w-4 mr-1" />
                            Demo
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}