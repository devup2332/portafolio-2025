import React, { useEffect } from "react";
import { THEME_KEY } from "../config/constants";
import { useThemeStore } from "../store/themeStore";
import { Theme } from "../types/theme";

type Props = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const { setTheme } = useThemeStore();
  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_KEY) as Theme;

    if (!localTheme) {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = isDark ? "dark" : "light";
      setTheme(theme);
      localStorage.setItem(THEME_KEY, theme);
      document.documentElement.classList.add(theme);
    } else {
      setTheme(localTheme);
      document.documentElement.classList.add(localTheme);
    }
  }, []);
  return <>{children}</>;
};

export default ThemeProvider;
