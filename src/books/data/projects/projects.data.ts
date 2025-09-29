export interface project {
    title: string,
    subtitle: string,
    description: string,
    problem: string,
    solution: string,
    technologies: string[],
    github: string,
    demo: string,
    image: string,
}

export const projects: project [] = [
    {
        title: "E-Commerce Moderno",
        subtitle: "Una historia de comercio digital",
        description:
            "Desarrollé una plataforma de comercio electrónico completa con React y Node.js. La historia comenzó con un cliente que soñaba con llevar su negocio al mundo digital, y culminó con una solución que incrementó sus ventas en un 200%.",
        problem: "Necesidad de una tienda online escalable y moderna",
        solution: "Arquitectura de microservicios con React, Node.js y PostgreSQL",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
        github: "#",
        demo: "#",
        image: "/modern-ecommerce-website.png",
    },
    {
        title: "App de Gestión de Tareas",
        subtitle: "Organizando el caos digital",
        description:
            "Una aplicación móvil que nació de la necesidad personal de organizar mejor mi tiempo. Se convirtió en una herramienta que ayuda a miles de usuarios a gestionar sus proyectos de manera más eficiente.",
        problem: "Falta de herramientas intuitivas para gestión de proyectos",
        solution: "App móvil con sincronización en tiempo real y UI intuitiva",
        technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
        github: "#",
        demo: "#",
        image: "/task-management-app.png",
    },
    {
        title: "Dashboard Analítico",
        subtitle: "Convirtiendo datos en historias",
        description:
            "Un panel de control que transforma datos complejos en visualizaciones comprensibles. Este proyecto me enseñó que los datos tienen historias que contar, solo necesitan el narrador correcto.",
        problem: "Datos dispersos sin visualización clara",
        solution: "Dashboard interactivo con gráficos en tiempo real",
        technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "MongoDB"],
        github: "#",
        demo: "#",
        image: "/analytics-dashboard.png",
    },
    {
        title: "3",
        subtitle: "Una historia de comercio digital",
        description:
            "Desarrollé una plataforma de comercio electrónico completa con React y Node.js. La historia comenzó con un cliente que soñaba con llevar su negocio al mundo digital, y culminó con una solución que incrementó sus ventas en un 200%.",
        problem: "Necesidad de una tienda online escalable y moderna",
        solution: "Arquitectura de microservicios con React, Node.js y PostgreSQL",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
        github: "#",
        demo: "#",
        image: "/modern-ecommerce-website.png",
    },
    {
        title: "2",
        subtitle: "Organizando el caos digital",
        description:
            "Una aplicación móvil que nació de la necesidad personal de organizar mejor mi tiempo. Se convirtió en una herramienta que ayuda a miles de usuarios a gestionar sus proyectos de manera más eficiente.",
        problem: "Falta de herramientas intuitivas para gestión de proyectos",
        solution: "App móvil con sincronización en tiempo real y UI intuitiva",
        technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
        github: "#",
        demo: "#",
        image: "/task-management-app.png",
    },
    {
        title: "1",
        subtitle: "Convirtiendo datos en historias",
        description:
            "Un panel de control que transforma datos complejos en visualizaciones comprensibles. Este proyecto me enseñó que los datos tienen historias que contar, solo necesitan el narrador correcto.",
        problem: "Datos dispersos sin visualización clara",
        solution: "Dashboard interactivo con gráficos en tiempo real",
        technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "MongoDB"],
        github: "#",
        demo: "#",
        image: "/analytics-dashboard.png",
    },
]