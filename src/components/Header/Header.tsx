import { useTranslation } from "react-i18next";
import CodeIcon from "../Icons/CodeIcon";
import Button from "../Button/Button";
import MoonIcon from "../Icons/MoonIcon";
import { useThemeStore } from "@/store/themeStore";
import SunIcon from "../Icons/SunIcon";
import { useEffect, useState } from "react";
import { appSections, Section } from "@/config/appSections";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/utils/cn";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [sections, setSections] = useState(appSections);
  const { setTheme, theme } = useThemeStore();
  const isMobile = useMediaQuery("(max-width: 1023px)");

  const listener = () => {
    const header = document.getElementById("header");
    if (!header) return;
    const scrollY = window.scrollY;
    if (scrollY > header.clientHeight) {
      if (isMobile) header.classList.add("opacity-0", "hidden");
      else header.classList.add("bg-bg-1");
    } else {
      if (isMobile) header.classList.remove("opacity-0", "hidden");
      else header.classList.remove("bg-bg-1");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [isMobile]);

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
    <div
      className="flex top-0 left-0 px-8 z-10 justify-between pt-6 fixed w-full transition-all lg:h-20 lg:pt-0 lg:border-b-[1px] lg:border-b-border-1"
      id="header"
    >
      <div className="flex justify-between items-center w-full max-w-lg m-auto lg:max-w-4xl 2xl:max-w-6xl 3xl:max-w-[1200px]">
        <Button
          variant="ghost"
          className="px-0 flex items-center gap-2 text-text-1"
        >
          <CodeIcon className="w-6 h-6" />
          <span className="text-xl font-bold">{t("header.title")}</span>
        </Button>

        <ul className="hidden lg:flex gap-4 items-center">
          {sections.map((section, index) => {
            return (
              <li
                className={cn(
                  "text-sm cursor-pointer",
                  section.inView && "text-primary",
                )}
                key={index}
              >
                {section.label}
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-4">
          <Button
            className="p-2"
            variant="ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <MoonIcon className="w-6 h-6 text-text-1" />
            ) : (
              <SunIcon className="w-6 h-6 text-text-1" />
            )}
          </Button>
          <Button
            className="p-2 text-text-1"
            variant="ghost"
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "es" : "en")
            }
          >
            {i18n.language}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
