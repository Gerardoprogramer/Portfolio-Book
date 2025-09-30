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
  Key,
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
      { name: "JavaScript", icon: Zap },
      { name: "Tailwind CSS", icon: Palette },
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Palette },
      { name: "JWT", icon: Key },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Python", icon: Code2 },
      { name: "Java", icon: Layers },
      { name: "C#", icon: Code2 },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "SQL Server", icon: Database },
      { name: "Redis", icon: Database },
      { name: "REST APIs", icon: Globe },
      // { name: "GraphQL", icon: Globe },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: [
      { name: "Docker", icon: Box },
      { name: "Git", icon: GitBranch },
      { name: "CI/CD", icon: Zap },
      { name: "WebSockets", icon: Cloud },
    ],
  },
  {
    title: "Mobile & Otros",
    icon: Smartphone,
    skills: [
      { name: "APIs REST", icon: Globe },
      { name: "Vite", icon: Zap },
      { name: "Testing", icon: Database },
      { name: "Figma", icon: Palette },
      { name: "Agile/Scrum", icon: Layers },
      { name: "UI/UX Design", icon: Palette },
    ],
  },
]