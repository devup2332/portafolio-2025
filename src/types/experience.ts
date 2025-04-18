import { Technology } from "@/config/technologies";

export type Experience = {
  companyName: string;
  role: string;
  date: string;
  description: {
    en: string[];
    es: string[];
  };
  technologies: Technology[];
};
