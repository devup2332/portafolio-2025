import HomeIcon from "../Icons/HomeIcon";
import UserIcon from "../Icons/UserIcon";
import ExperienceIcon from "../Icons/ExperienceIcon";
import ProjectsIcon from "../Icons/ProjectsIcon";
import EmailIcon from "../Icons/EmailIcon";

const sections = [
  {
    icon: HomeIcon,
    label: "Home",
  },

  {
    icon: UserIcon,
    label: "About",
  },
  {
    icon: ExperienceIcon,
    label: "Experience",
  },
  {
    icon: ProjectsIcon,
    label: "Projects",
  },
  {
    icon: EmailIcon,
    label: "Contact",
  },
];

const BottomNav = () => {
  return (
    <div className="px-8  fixed bottom-6 w-full left-1/2 -translate-x-1/2">
      <div className="flex justify-around items-center  border-[1px] rounded-md border-border-1 h-[60px] bottomNav">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <Icon
              key={index}
              className="w-7 cursor-pointer h-6 text-text-1 stroke-current"
            />
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
