import { useTranslation } from "react-i18next";
import UserLoverIcon from "../Icons/UserLoverIcon";
import ReactIcon from "../Icons/ReactIcon";
import AstroIcon from "../Icons/AstroIcon";
import NextIcon from "../Icons/NextIcon";
import FigmaIcon from "../Icons/FigmaIcon";
import TailwindCssIcon from "../Icons/TailwindCssIcon";
import NestJsIcon from "../Icons/NestJsIcon";
import PostgresIcon from "../Icons/PostgresIcon";
import FigmaOutlineIcon from "../Icons/FigmaOutlineIcon";
import DatabaseIcon from "../Icons/DatabaseIcon";

const items = [
  {
    title: "about.items.1.title",
    headerIcon: UserLoverIcon,
    description: "about.items.1.description",
    icons: [ReactIcon, AstroIcon, NextIcon],
  },
  {
    title: "about.items.2.title",
    headerIcon: FigmaOutlineIcon,
    description: "about.items.2.description",
    icons: [FigmaIcon, TailwindCssIcon],
  },
  {
    title: "about.items.3.title",
    headerIcon: DatabaseIcon,
    description: "about.items.3.description",
    icons: [NestJsIcon, PostgresIcon],
  },
];

const About = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="pb-[120px]">
      <h1 className="text-text-1 text-[32px] font-bold">{t("about.title")}</h1>
      <h2 className="text-text-2 text-sm">{t("about.subtitle")}</h2>

      <div className="mt-16 grid gap-16 px-5 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-12">
        {items.map((item, index) => {
          const HeaderIcon = item.headerIcon;
          const icons = item.icons.map((Icon, index) => (
            <Icon key={index} className="w-12 h-12 fill-current text-text-1" />
          ));
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-4 lg:bg-bg-2 lg:py-8 lg:px-8 rounded-xl lg:border-[1px] lg:border-border-1 lg:gap-5 xl:py-10"
            >
              <div className="bg-bg-3 p-3 rounded-full w-fit">
                <HeaderIcon className="text-text-3 stroke-current" />
              </div>

              <h3 className="text-[18px] font-semibold text-center">
                {t(item.title)}
              </h3>
              <p className="text-sm leading-[24px] text-center">
                {t(item.description)}
              </p>

              <div className="flex gap-6 justify-center">{icons}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
