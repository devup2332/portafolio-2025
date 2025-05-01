import { appSections } from "@/config/appSections";

export const goToSection = (id: string) => {
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
