import { Technology } from "@/config/technologies";

export type Project = {
  title: string;
  description: {
    en: string[];
    es: string[];
  };
  subtitle: string;
  className?: string;
  status: string;
  imageUrl: string;
  technologies: Technology[];
};
