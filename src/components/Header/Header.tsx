import { useTranslation } from "react-i18next";
import CodeIcon from "../Icons/CodeIcon";
import Button from "../Button/Button";
import MoonIcon from "../Icons/MoonIcon";
import { useThemeStore } from "@/store/themeStore";
import SunIcon from "../Icons/SunIcon";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { setTheme, theme } = useThemeStore();
  return (
    <div className="flex justify-between mt-6">
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
