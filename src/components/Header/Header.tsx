import { useTranslation } from "react-i18next";
import CodeIcon from "../Icons/CodeIcon";
import Button from "../Button/Button";
import MoonIcon from "../Icons/MoonIcon";
import { useThemeStore } from "@/store/themeStore";
import SunIcon from "../Icons/SunIcon";
import { cn } from "@/utils/cn";
import { appSections } from "@/config/appSections";
import { useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { setTheme, theme } = useThemeStore();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const goToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    let y = 0;

    for (const s of appSections) {
      const elementHeight = document.getElementById(s.id)?.clientHeight;
      if (!elementHeight || s.id === id) break;
      y += elementHeight;
    }
    window.scrollTo({
      top: y - 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const listener = () => {
      const header = document.getElementById("header");
      if (!header) return;
      if (window.scrollY > 50 && !isMobile) {
        header.classList.add("bg-bg-1");
      } else {
        header.classList.remove("bg-bg-1");
      }
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [isMobile]);

  return (
    <div
      className="flex top-0 left-0 px-8 z-10 justify-between pt-6 fixed w-full transition-colors lg:h-20 lg:pt-0 lg:border-b-[1px] lg:border-b-border-1"
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
          {appSections.map((section, index) => {
            return (
              <li
                className={cn(
                  "text-sm cursor-pointer",
                  section.inView && "text-primary",
                )}
                onClick={() => goToSection(section.id)}
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
