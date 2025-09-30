import { Mail, Linkedin, Github, BriefcaseBusiness } from "lucide-react"

interface SocialLink {
  href: string
  label: string
  icon: React.ReactNode
  external?: boolean
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=gerardoalonso.martinezmonge@gmail.com&su=Contacto%20desde%20tu%20portfolio&body=Hola%20Gerardo,",
    label: "Email",
    icon: <Mail className="h-6 w-6" />,
    external: false, // se queda interno
  },
  {
    href: "https://www.linkedin.com/in/gerardo-mart%C3%ADnez-monge-0aa12231b/",
    label: "LinkedIn",
    icon: <Linkedin className="h-6 w-6" />,
    external: true,
  },
  {
    href: "https://github.com/Gerardoprogramer",
    label: "GitHub",
    icon: <Github className="h-6 w-6" />,
    external: true,
  },
  {
    href: "https://gerardoprogramer.github.io/Portfolio/index.html",
    label: "Porfolio 2",
    icon: <BriefcaseBusiness className="h-6 w-6" />,
    external: true,
  },
]