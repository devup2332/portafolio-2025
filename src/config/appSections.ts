import EmailIcon from "@/components/Icons/EmailIcon";
import ExperienceIcon from "@/components/Icons/ExperienceIcon";
import HomeIcon from "@/components/Icons/HomeIcon";
import ProjectsIcon from "@/components/Icons/ProjectsIcon";
import UserIcon from "@/components/Icons/UserIcon";
import { Icon } from "@/types/svg";

export type Section = {
  icon: React.FC<Icon>;
  label: string;
  id: string;
  inView: boolean;
  position?: {
    y1: number;
    y2: number;
  };
};
export const appSections: Section[] = [
  {
    icon: HomeIcon,
    label: "Home",
    id: "banner",
    inView: false,
  },

  {
    icon: UserIcon,
    label: "About",
    id: "about",
    inView: false,
  },
  {
    icon: ExperienceIcon,
    label: "Experience",
    id: "experience",
    inView: false,
  },
  {
    icon: ProjectsIcon,
    label: "Projects",
    id: "projects",
    inView: false,
  },
  {
    icon: EmailIcon,
    label: "Contact",
    id: "contact",
    inView: false,
  },
];
