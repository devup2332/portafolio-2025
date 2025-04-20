import { useTranslation } from "react-i18next";
import CodeIcon from "../Icons/CodeIcon";
import Button from "../Button/Button";
import MoonIcon from "../Icons/MoonIcon";
import { useThemeStore } from "@/store/themeStore";
import SunIcon from "../Icons/SunIcon";
import { useEffect } from "react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { setTheme, theme } = useThemeStore();

  useEffect(() => {
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      if (!header) return;
      const scrollY = window.scrollY;
      if (scrollY > header.clientHeight) {
        header.classList.add("opacity-0", "hidden");
      } else {
        header.classList.remove("opacity-0", "hidden");
      }
    });
  }, []);
  return (
    <div
      className="flex top-0 left-0 px-8 justify-between pt-6 fixed w-full transition-all"
      id="header"
    >
      <Button
        variant="ghost"
        className="px-0 flex items-center gap-2 text-text-1"
      >
        <CodeIcon className="w-6 h-6" />
        <span className="text-xl font-bold">{t("header.title")}</span>
      </Button>

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
  );
};

export default Header;
