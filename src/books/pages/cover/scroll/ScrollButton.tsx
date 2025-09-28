import {Button} from '@/components/ui/button'

interface Props{
    title: string,
    onClick: () => void
}

export function ScrollButton({title, onClick }: Props) {
 
    return (
    <Button
      onClick={onClick}
      className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-8 py-4 text-lg rounded-none relative overflow-hidden group"
      style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
    >
      <span className="relative z-10">{title}</span>
      <div className="absolute inset-0 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
    </Button>
  )
}