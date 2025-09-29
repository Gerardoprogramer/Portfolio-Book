import { type chapter } from "@/books/data/chapters/chapters.data"

type Props = {
    chapters: chapter[]
    activeChapter: string
    onSelect: (href: string) => void
}

export function ChapterList({ chapters, activeChapter, onSelect }: Props) {
    return (
        <ul className="space-y-2">
            {chapters.map((chapter) => (
                <li key={chapter.id}>
                    <button
                        onClick={() => onSelect(chapter.href)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${activeChapter === chapter.id
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                            }`}
                    >
                        <div className="font-playfair font-semibold">{chapter.title}</div>
                        {chapter.subtitle && <div className="text-sm opacity-80">{chapter.subtitle}</div>}
                    </button>
                </li>
            ))}
        </ul>
    )
}