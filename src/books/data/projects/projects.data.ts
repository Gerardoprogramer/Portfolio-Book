export interface project {
    title: string,
    subtitle: string,
    description: string,
    problem: string,
    solution: string,
    technologies: string[],
    github: string,
    demo?: string,
    image: string,
}

export const projects: project[] = [
    {
        title: "Sitio Web para Restaurante",
        subtitle: "Plataforma de pedidos y reservas con ASP.NET y C#",
        description:
            "Desarrollé una plataforma web completa para un restaurante usando ASP.NET Core y C#. Incluye catálogo de menú dinámico, sistema de pedidos en línea, gestión de mesas y reservas, panel administrativo para actualizar productos, y notificaciones en tiempo real para el personal de cocina.",
        problem: "Necesidad de digitalizar pedidos, reservas y la gestión del menú para mejorar la experiencia del cliente y la eficiencia operativa",
        solution: "Aplicación web con ASP.NET Core (MVC/Razor), API RESTful, Entity Framework Core para acceso a datos y SignalR para actualizaciones en tiempo real; panel administrativo para control total del restaurante",
        technologies: [
            "ASP.NET Core",
            "C#",
            "Entity Framework Core",
            "SQL Server",
            "Razor Pages / MVC",
            "SignalR (WebSockets)",
            "Bootstrap",
            "Azure"
        ],
        github: "https://github.com/Gerardoprogramer/Restaurante",
        image: "/Restaurant.png"
    },
    {
        title: "Gifs App",
        subtitle: "Explorando gifs con la API de Giphy",
        description:
            "Desarrollé una aplicación web que permite buscar y visualizar gifs en tiempo real consumiendo la API de Giphy. Incluye pruebas unitarias para garantizar la calidad del código y fue construida con un enfoque en rendimiento y simplicidad.",
        problem: "Necesidad de una forma rápida y divertida de buscar y mostrar gifs animados",
        solution: "Aplicación web en React con Vite para un entorno de desarrollo ágil, pruebas unitarias con Vitest y consumo de la API de Giphy",
        technologies: ["React", "Vite", "Vitest", "API de Giphy", "Tailwind", "TypeScript"],
        github: "https://github.com/Gerardoprogramer/gifs-app",
        demo: "https://giphygmm.netlify.app/",
        image: "/giphyApp.png"
    },
    {
        title: "Hooks App",
        subtitle: "Explorando el poder de los React Hooks",
        description:
            "Construí una aplicación web educativa con ejemplos prácticos de los principales hooks de React, incluyendo también custom hooks. El objetivo fue practicar, reforzar conceptos y tener una guía interactiva de referencia sobre su funcionamiento.",
        problem: "Necesidad de practicar y recordar de forma organizada el uso de hooks en proyectos React",
        solution: "Aplicación web en React con ejemplos interactivos de cada hook, incluyendo hooks personalizados para casos comunes",
        technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Custom Hooks"],
        github: "https://github.com/Gerardoprogramer/hooks_app",
        image: "/Hooks.png"
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

]