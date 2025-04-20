import HomeIcon from "../Icons/HomeIcon";
import UserIcon from "../Icons/UserIcon";
import ExperienceIcon from "../Icons/ExperienceIcon";
import ProjectsIcon from "../Icons/ProjectsIcon";
import EmailIcon from "../Icons/EmailIcon";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { Icon } from "@/types/svg";

type Section = {
  icon: React.FC<Icon>;
  label: string;
  id: string;
  inView: boolean;
  position?: {
    y1: number;
    y2: number;
  };
};
const initial: Section[] = [
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
const BottomNav = () => {
  const [sections, setSections] = useState<Section[]>(initial);
  const goToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    let y = 0;

    for (const s of sections) {
      const elementHeight = document.getElementById(s.id)?.clientHeight;
      if (!elementHeight || s.id === id) break;
      y += elementHeight;
    }
    window.scrollTo({
      top: y - 100,
      behavior: "smooth",
    });
  };
  const startScroll = () => {
    let accumulated = 0;
    const offset = 200;
    const mapped: Section[] = [];

    sections.forEach((s, i) => {
      const element = document.getElementById(s.id);

      if (!element) return;

      const dimensions = element.getBoundingClientRect();

      const y2 =
        i === 0 ? dimensions.height - offset : accumulated + dimensions.height;

      mapped.push({
        ...s,
        position: {
          y1: accumulated,
          y2,
        },
      });
      accumulated = y2;
    });
    mapped.forEach((s) => {
      if (window.scrollY >= s.position!.y1 && window.scrollY < s.position!.y2) {
        s.inView = true;
      }
    });
    setSections(mapped);
  };

  useEffect(() => {
    startScroll();
    document.addEventListener("scroll", startScroll);
    return () => {
      document.removeEventListener("scroll", startScroll);
    };
  }, []);
  return (
    <div className="px-8  fixed bottom-6 w-full left-1/2 -translate-x-1/2">
      <div className="flex justify-around items-center border-[1px] rounded-md border-border-1 h-[60px] bottomNav">
        {sections.map((section, index) => {
          return (
            <section.icon
              key={index}
              onClick={() => goToSection(section.id)}
              className={cn(
                "w-7 cursor-pointer h-6 stroke-current",
                section.inView ? "text-primary" : "text-text-1",
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
