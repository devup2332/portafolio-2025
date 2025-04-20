import { ICONS } from "@/config/technologies";
import data from "@/data";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="pb-[120px]" id="projects">
      <h1 className="text-text-1 text-[32px] font-bold">
        {t("projects.title")}
      </h1>
      <h2 className="text-text-2 text-sm mt-3">{t("projects.subtitle")}</h2>

      <div className="mt-16 grid gap-18">
        {data.projects.map((project, i) => {
          const {
            title,
            imageUrl,
            subtitle,
            status,
            description,
            technologies,
          } = project;
          return (
            <div key={i}>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <h1 className="text-text-1 text-lg">{title}</h1>
                  <h2 className="text-text-2 text-xs">{subtitle}</h2>
                </div>
                <span className="text-xs">{status}</span>
              </div>
              <img
                src={imageUrl}
                className="rounded-xl block aspect-video object-cover h-64 mt-4"
                alt={`image ${title}`}
              />
              <div className="grid gap-3 mt-8">
                {description[i18n.language as "es" | "en"].map((desc, i) => {
                  return (
                    <p key={i} className="text-xs">
                      {desc}
                    </p>
                  );
                })}
              </div>

              <div className="flex gap-6 flex-wrap mt-8">
                {technologies.map((tech, i) => {
                  const Icon = ICONS[tech];
                  return <Icon key={i} className="w-8 h-8" />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
