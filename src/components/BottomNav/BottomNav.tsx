import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { appSections, Section } from "@/config/appSections";

const BottomNav = () => {
  const [sections, setSections] = useState<Section[]>(appSections);
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

    const mapped: Section[] = sections.map((s, i) => {
      const element = document.getElementById(s.id);

      if (!element) return s;

      const dimensions = element.getBoundingClientRect();

      const y2 =
        i === 0 ? dimensions.height - offset : accumulated + dimensions.height;

      const returned = {
        ...s,
        position: {
          y1: accumulated,
          y2,
        },
      };
      accumulated = y2;
      return returned;
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
    <div className="px-8 fixed bottom-6 w-full left-1/2 -translate-x-1/2 lg:hidden">
      <div className="flex max-w-lg m-auto justify-around items-center border-[1px] rounded-md border-border-1 h-[60px] bottomNav">
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
