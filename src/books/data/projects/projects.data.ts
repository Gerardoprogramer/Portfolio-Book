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
  title: "Portfolio Web",
  subtitle: "Un libro digital sobre mi camino como desarrollador",
  description:
    "Creé un portfolio web con la estética y narrativa de un libro, donde cada sección funciona como un capítulo que cuenta mi historia como programador. El diseño busca transmitir mi pasión por la lectura y, al mismo tiempo, mostrar mis proyectos de una manera creativa y profesional.",
  problem:
    "Necesitaba una forma única y personal de presentarme al mundo laboral, más allá de un listado tradicional de proyectos.",
  solution:
    "Desarrollé un portfolio en formato de libro digital utilizando React, Vite y TypeScript, con Tailwind CSS para el estilo. Cada capítulo está pensado como una narrativa visual y técnica que permite recorrer mis proyectos de manera cronológica y temática.",
  technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
  github: "https://github.com/Gerardoprogramer/Portfolio-Book",
  demo: "https://mybookportfolio.netlify.app/",
  image: "/MyPortfolio.png"
},
]