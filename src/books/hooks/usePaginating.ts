
import { useState } from "react"
import type { project } from "../data/projects/projects.data"

export const usePaginating = (projects: project[]) => {
  
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 3
  
    // calcular rango de proyectos
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentProjects = projects.slice(startIndex, endIndex)
  
    const totalPages = Math.ceil(projects.length / itemsPerPage)
  
  return {
    currentPage,
    setCurrentPage,
    currentProjects,
    totalPages
  }
  
}
