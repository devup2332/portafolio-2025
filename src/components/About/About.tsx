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

const About = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="pb-[120px]">
      <h1 className="text-text-1 text-[32px] font-bold">{t("about.title")}</h1>
      <h2 className="text-text-2 text-sm">{t("about.subtitle")}</h2>

      <div className="mt-16 flex-col gap-18 px-5">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-bg-3 p-3 rounded-full w-fit">
            <UserLoverIcon className="text-text-3 stroke-current" />
          </div>

          <h3 className="text-[18px] font-semibold">
            {t("about.items.1.title")}
          </h3>
          <p className="text-sm leading-[24px] text-center">
            {t("about.items.1.description")}
          </p>

          <div className="flex gap-6 justify-center ">
            <ReactIcon className="w-12 h-12" />
            <AstroIcon className="w-12 h-12 text-text-1 fill-current" />
            <NextIcon className="w-12 h-12 text-text-1 fill-current" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-16">
          <div className="bg-bg-3 p-3 rounded-full w-fit">
            <FigmaOutlineIcon className="text-text-3 stroke-current" />
          </div>

          <h3 className="text-[18px] font-semibold">
            {t("about.items.2.title")}
          </h3>
          <p className="text-sm leading-[24px] text-center">
            {t("about.items.2.description")}
          </p>

          <div className="flex gap-6 justify-center ">
            <FigmaIcon className="w-12 h-12" />
            <TailwindCssIcon className="w-12 h-12" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-16">
          <div className="bg-bg-3 p-3 rounded-full w-fit">
            <DatabaseIcon className="text-text-3 stroke-current" />
          </div>

          <h3 className="text-[18px] font-semibold">
            {t("about.items.3.title")}
          </h3>
          <p className="text-sm leading-[24px] text-center">
            {t("about.items.3.description")}
          </p>

          <div className="flex gap-6 justify-center ">
            <NestJsIcon className="w-12 h-12" />
            <PostgresIcon className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
