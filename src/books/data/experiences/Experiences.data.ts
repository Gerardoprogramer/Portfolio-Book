
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
        period: "2023–2025",
        title: "Programador Senior",
        company: "Empresa Innovadora X",
        location: "Ciudad, País",
        description:
            "Lideré el desarrollo de aplicaciones web escalables utilizando React y Node.js. Implementé arquitecturas de microservicios que mejoraron el rendimiento en un 40%. Mi historia aquí comenzó con desafíos complejos y culminó en soluciones elegantes que transformaron la experiencia del usuario.",
        technologies: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
        period: "2021–2023",
        title: "Desarrollador Fullstack",
        company: "Freelance",
        location: "Remoto",
        description:
            "Emprendí mi propio camino como desarrollador independiente, creando soluciones personalizadas para diversos clientes. Cada proyecto fue una nueva aventura: desde e-commerce hasta aplicaciones móviles, escribí código que dio vida a ideas y sueños empresariales.",
        technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    },
    {
        period: "2019–2021",
        title: "Desarrollador Junior",
        company: "StartUp Tecnológica",
        location: "Ciudad, País",
        description:
            "Mis primeros pasos en el mundo profesional del desarrollo. Aquí aprendí que cada bug era una lección, cada feature una oportunidad de crecimiento. Contribuí al desarrollo de una plataforma SaaS que alcanzó más de 10,000 usuarios activos.",
        technologies: ["JavaScript", "PHP", "MySQL", "Git"],
    },
]