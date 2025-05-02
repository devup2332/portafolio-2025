import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    title: "Lapzo",
    subtitle: "Education app for companies",
    status: "Finished",
    imageUrl:
      "https://cdn.dribbble.com/userupload/42959262/file/original-84b7a106b5ec3edc6afedca3870da519.png?resize=752x&vertical=center",
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
    technologies: [
      "Postgres",
      "Storybook",
      "React",
      "Tailwind",
      "NestJs",
      "NodeJs",
    ],
  },
  {
    title: "Salesforce",
    subtitle: "CRM app for companies",
    status: "In Progress",
    imageUrl:
      "https://cdn.dribbble.com/userupload/42955345/file/original-e22249251d51682bf8a3ae7a0a86509a.png?resize=752x&vertical=center",
    description: {
      en: [
        "Salesforce is a leading CRM platform that helps companies manage customer relationships and sales processes effectively.",
        "Currently working on enhancing the user interface and integrating new features to improve user experience.",
      ],
      es: [
        "Salesforce es una plataforma líder en CRM que ayuda a las empresas a gestionar las relaciones con los clientes y los procesos de ventas de manera efectiva.",
        "Actualmente estoy trabajando en mejorar la interfaz de usuario e integrar nuevas funciones para mejorar la experiencia del usuario.",
      ],
    },
    technologies: ["React", "NodeJs", "Typescript", "GraphQL", "Postgres"],
  },
  {
    title: "Esika backoffice",
    subtitle: "Backoffice for e-commerce",
    status: "Finished",
    className:
      "lg:col-span-2 lg:justify-self-center lg:max-w-[400px] 2xl:col-start-3 2xl:col-end-4",
    imageUrl:
      "https://cdn.dribbble.com/userupload/42958226/file/original-6b0860a5a3e00e5cd40593e09d1b7061.png?resize=752x&vertical=center",
    description: {
      en: [
        "Esika is a leading e-commerce platform that provides a backoffice solution for managing online sales and customer interactions.",
        "Worked on developing the backend services using Node.js and integrating with various third-party APIs.",
      ],
      es: [
        "Esika es una plataforma de comercio electrónico líder que proporciona una solución de backoffice para gestionar las ventas en línea y las interacciones con los clientes.",
        "Trabajé en el desarrollo de los servicios backend utilizando Node.js e integrando con varias API de terceros.",
      ],
    },
    technologies: ["NodeJs", "Express", "Postgres", "GraphQL"],
  },
];
