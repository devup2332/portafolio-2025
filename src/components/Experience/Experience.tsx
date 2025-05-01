import data from "@/data";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="pb-[120px]" id="experience">
      <h1 className="text-text-1 text-[32px] font-bold">
        {t("experience.title")}
      </h1>
      <h2 className="text-text-2 text-sn mt-3">{t("experience.subtitle")}</h2>

      <div className="mt-16 grid gap-18 lg:gap-6 lg:grid-cols-3">
        {data.experience.map((item, index) => {
          return (
            <div
              key={index}
              className="lg:bg-bg-2 lg:px-6 lg:py-8 lg:rounded-xl lg:border-[1px] lg:border-border-1"
            >
              <div className="flex items-center justify-between ">
                <div className="flex flex-col gap-1">
                  <h1 className="text-text-1 text-lg">{item.companyName}</h1>
                  <h2 className="text-text-2 text-xs">{item.role}</h2>
                </div>
                <span className="text-xs">{item.date}</span>
              </div>
              <div className="grid gap-3 mt-8">
                {item.description[i18n.language as "en" | "es"].map(
                  (desc, i) => {
                    return (
                      <p key={i} className="text-xs lg:text-sm">
                        {desc}
                      </p>
                    );
                  },
                )}
              </div>
              <div className="flex flex-wrap gap-3 mt-[18px]">
                {item.technologies.map((tech, i) => {
                  return (
                    <span
                      key={i}
                      className="text-xs bg-badge rounded-full px-4 py-1"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
