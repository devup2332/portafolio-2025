import { create } from "zustand";
import { Theme } from "../types/theme";

type ThemeStore = {
  theme?: Theme;
  setTheme: (theme: "dark" | "light") => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: undefined,
  setTheme: (theme) => {
    set({ theme });
    localStorage.setItem("theme-key", theme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  },
}));
