import { useEffect, useState } from "react"

export function useScrollSpy(ids: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState(ids[0] || "")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset
      for (let i = ids.length - 1; i >= 0; i--) {
        const section = document.getElementById(ids[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(ids[i])
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [ids, offset])

  return activeId
}