
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Props{
    avatar: string,
    name: string
}


export const BookAvatar = ({avatar, name}: Props) => {
  return (
<div className="book-page p-8 rounded-lg relative">
      <Avatar className="w-48 h-48 mx-auto mb-6 border-4 border-emerald-600 shadow-2xl">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback className="text-4xl font-playfair bg-emerald-500 text-zinc-950">GMM</AvatarFallback>
      </Avatar>

      {/* Decorative frame corners */}
      <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-emerald-600"></div>
      <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-emerald-600"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-emerald-600"></div>
      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-emerald-600"></div>
    </div>
  )
}
