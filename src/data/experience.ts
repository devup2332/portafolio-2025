import { Experience } from "@/types/experience";

export const experience: Experience[] = [
  {
    companyName: "Lapzo",
    role: "Software Engineer",
    date: "2022 May - 2025 Mar",
    description: {
      en: [
        "Lapzo is a talent management platform that enhances employee skills through gamified learning paths, on-demand courses, and aligns objectives using the OKR methodology.",
        "Worked on migrating a React application to a newer version, handling TypeScript integration and developing new screens and features from scratch.",
      ],
      es: [
        "Lapzo es una plataforma de gestión del talento que mejora las habilidades de los empleados a través de rutas de aprendizaje gamificadas, cursos a demanda y alinea objetivos utilizando la metodología OKR.",
        "Trabajé en la migración de una aplicación React a una versión más reciente, manejando la integración de TypeScript y desarrollando nuevas pantallas y características desde cero.",
      ],
    },
    technologies: ["NodeJs", "React", "Storybook", "NestJs", "Postgres"],
  },
  {
    companyName: "Inetum",
    role: "Software Engineer",
    date: "2021 Sep - 2022 May",
    description: {
      en: [
        "Inetum is a global IT services company that provides agile digital services and solutions, assisting businesses and institutions in leveraging digital flow",
        "Implemented new features and resolved issues in React and Next, contributing to the platform's growth and functionality.",
      ],
      es: [
        "Inetum es una empresa global de servicios de TI que ofrece servicios y soluciones digitales ágiles, ayudando a empresas e instituciones a aprovechar el flujo digital.",
        "Implementé nuevas funciones y resolví problemas en React y Next, contribuyendo al crecimiento y funcionalidad de la plataforma.",
      ],
    },
    technologies: [
      "NodeJs",
      "React",
      "NextJs",
      "MaterialUI",
      "Postgres",
      "Apollo",
    ],
  },
  {
    companyName: "Jabu",
    role: "Software Engineer",
    date: "2020 Mar - 2021 Aug",
    className:
      "lg:col-span-2 lg:justify-self-center lg:max-w-[432px] 2xl:col-start-3",
    description: {
      en: [
        "Jabu is a fintech company that develops digital solutions to improve payments and logistics, helping businesses transition from cash-based operations to a more efficient digital ecosystem.",
        "Worked on a new React and Next project, fixing bugs and adding new features while improving performance by reducing load times from 10 seconds to about 1 second.",
      ],
      es: [
        "Jabu es una empresa fintech que desarrolla soluciones digitales para mejorar los pagos y la logística, ayudando a las empresas a pasar de operaciones basadas en efectivo a un ecosistema digital más eficiente.",
        "Trabajé en un nuevo proyecto de React y Next, corrigiendo errores y agregando nuevas funciones mientras mejoraba el rendimiento al reducir los tiempos de carga de 10 segundos a aproximadamente 1 segundo.",
      ],
    },
    technologies: [
      "NodeJs",
      "React",
      "Tailwind",
      "Storybook",
      "Prisma",
      "Postgres",
    ],
  },
];
