
export interface experience {
    period: string,
    title: string,
    company: string,
    location: string,
    description:string, 
    technologies: string[],
}

export const experiences: experience[] = [
    {
        period: "Aug-Dec / 2024",
        title: "Desarrollador BackEnd",
        company: "FUNREAD",
        location: "remoto",
        description:
            "Desarrollé endpoints con Python y Django, mejorando la escalabilidad y eficiencia de la plataforma. Implementé mecánicas de gamificación que potenciaron la experiencia del usuario y el aprendizaje interactivo. Formé parte de un equipo Scrum, contribuyendo al desarrollo de nuevas funcionalidades y a la entrega continua de valor en cada Sprint.",
        technologies: ["Python", "Django", "Mysql", "Git"],
    },
    {
        period: "Feb-May / 2025",
        title: "Desarrollador Fullstack",
        company: "4thewords",
        location: "Remoto",
        description:
            "Trabajé en un juego gamificado para escritores, participando en el desarrollo de un componente de pestañas reutilizable en Vue.js, migrando endpoints del backend de PHP a Python, y corrigiendo bugs tanto en frontend como backend. Además, colaboré en el mantenimiento y mejoras continuas de la plataforma, asegurando una experiencia más estable y fluida para los usuarios.",
        technologies: ["Vue.js", "JavaScript", "PHP", "Tailwind CSS", "Python", "Mysql", "Git", "Figma"],
    },
]