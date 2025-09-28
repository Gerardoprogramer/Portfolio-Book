import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Menu, X } from "lucide-react"

import { chapters } from "@/books/data/chapters/chapters"
import { ChapterList } from "./chapterList/ChapterList"
import { useScrollSpy } from "@/books/hooks/useScrollSpy"



export function BookNavigation() {

  const [isOpen, setIsOpen] = useState(false)
  const activeChapter = useScrollSpy(chapters.map((c) => c.id))

  const scrollToChapter = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50 md:hidden bg-card border-accent"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Navigation */}
      <nav
        className={`fixed left-0 top-0 h-full w-80 bg-card border-r border-accent book-spine z-40 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-playfair font-bold text-foreground">Índice</h2>
          </div>
          <ChapterList
            chapters={chapters}
            activeChapter={activeChapter}
            onSelect={scrollToChapter}
          />
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}