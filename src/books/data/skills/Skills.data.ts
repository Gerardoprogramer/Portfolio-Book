import {
  Code2,
  Palette,
  Database,
  Server,
  Cloud,
  Smartphone,
  Wrench,
  GitBranch,
  Layers,
  Zap,
  Globe,
  Box,
} from "lucide-react"


interface skills{
    name: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>
}

interface Props{
    title: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
    skills: skills[],
}

export const skillCategories: Props[] = [
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      { name: "React", icon: Code2 },
      { name: "Vue.js", icon: Layers },
      { name: "TypeScript", icon: Code2 },
      { name: "Next.js", icon: Zap },
      { name: "Tailwind CSS", icon: Palette },
      { name: "HTML5/CSS3", icon: Globe },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Python", icon: Code2 },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "GraphQL", icon: Layers },
      { name: "REST APIs", icon: Globe },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: [
      { name: "Docker", icon: Box },
      { name: "AWS", icon: Cloud },
      { name: "Git", icon: GitBranch },
      { name: "CI/CD", icon: Zap },
      { name: "Linux", icon: Server },
      { name: "Vercel", icon: Cloud },
    ],
  },
  {
    title: "Mobile & Otros",
    icon: Smartphone,
    skills: [
      { name: "React Native", icon: Smartphone },
      { name: "Flutter", icon: Smartphone },
      { name: "Firebase", icon: Database },
      { name: "Figma", icon: Palette },
      { name: "Agile/Scrum", icon: Layers },
      { name: "UI/UX Design", icon: Palette },
    ],
  },
]