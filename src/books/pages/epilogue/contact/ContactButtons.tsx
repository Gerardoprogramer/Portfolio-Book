import { Button } from "@/components/ui/button"
import { socialLinks } from "@/books/data/contact/ContactButtos.data"

export const ContactButtons = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
      {socialLinks.map(({ href, label, icon, external }) => (
        <Button
          key={label}
          variant="outline"
          className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-zinc-950 transition-all duration-300 bg-transparent"
          asChild
        >
          <a
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="flex flex-col items-center gap-2 py-6"
          >
            {icon}
            <span className="text-sm">{label}</span>
          </a>
        </Button>
      ))}
    </div>
  )
}
