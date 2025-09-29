
import { BookNavigation } from '@/books/pages/navigation/BookNavigation'
import { BookCover } from '@/books/pages/cover/BookCover'
import { BookPrologue } from '@/books/pages/Prologue/BookPrologue'
import { BookExperiences } from '@/books/pages/experiences/BookExperiences'
import {BookProjects} from '@/books/pages/projects/BookProjects'
export const BookApp = () => {
    return (
        <div className="min-h-screen bg-background">
            <BookNavigation />

            <main className="md:ml-80">
                <BookCover />
                <BookPrologue />
                <BookExperiences />
                <BookProjects/>
            </main>
        </div>
    )
}
