import { appSections } from "@/config/appSections";
import { cn } from "@/utils/cn";
import { goToSection } from "@/utils/sections";

const BottomNav = () => {
  return (
    <div className="px-8 fixed bottom-6 w-full left-1/2 -translate-x-1/2 lg:hidden">
      <div className="flex max-w-lg m-auto justify-around items-center border-[1px] rounded-md border-border-1 h-[60px] bottomNav">
        {appSections.map((section, index) => {
          return (
            <section.icon
              key={index}
              onClick={() => goToSection(section.id)}
              className={cn(
                "w-7 cursor-pointer h-6 stroke-current hover:text-primary transition-colors",
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
