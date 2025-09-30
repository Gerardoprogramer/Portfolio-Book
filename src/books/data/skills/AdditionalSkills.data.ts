interface AdditionalCategory {
  title: string
  items: string[]
}

export const additionalSkills: AdditionalCategory[] = [
 {
    title: "Metodologías",
    items: [
      "Agile / Scrum",
      "Test-Driven Development (Unit)",
      "Behavior-Driven Development (BDD)",
      "Clean Architecture",
      "Design Patterns",
      "Code Reviews y Pair Programming",
    ],
  },
  {
    title: "Comunicación",
    items: [
      "Documentación clara y mantenible",
      "Comunicación efectiva en equipo",
      "Presentación de avances",
      "Feedback constructivo",
      "Trabajo colaborativo con PMs y diseñadores",
    ],
  },
  {
    title: "Idiomas",
    items: [
      "Español (Nativo)",
      "Inglés (Básico / Intermedio escrito y lectura)",
      "Código (Fluido) 😉",
    ],
  },
]