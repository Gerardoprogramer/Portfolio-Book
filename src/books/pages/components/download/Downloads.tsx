import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface Props {
  downloadName: string,
  file: string
}

export const Downloads = ({ downloadName, file }: Props) => {
  return (
    <div className="pt-8">
      <Button
        className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25"
        asChild
      >
        <a href={file} download className="flex items-center gap-2">
          <Download className="h-5 w-5" />
          {downloadName}
        </a>
      </Button>
    </div>
  )
}
