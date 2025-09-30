import { Button } from "@/components/ui/button"

interface Props {
  currentPage: number,
  totalPages: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>

}

export const Paginating = ({ currentPage, setCurrentPage, totalPages }: Props) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <Button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
        className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg rounded-none relative overflow-hidden group"
        style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
      >
        Anterior
      </Button>

      <span className="text-zinc-400 text-sm sm:text-base mt-2 sm:mt-0">
        Página {currentPage} de {totalPages}
      </span>

      <Button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => p + 1)}
        className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg rounded-none relative overflow-hidden group"
        style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
      >
        Siguiente
      </Button>
    </div>
  )
}
