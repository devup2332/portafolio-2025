import { useTranslation } from "react-i18next";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import Button from "../Button/Button";

const links = [
  {
    icon: LinkedinIcon,
    label: "Linkedin",
    url: "https://www.linkedin.com/in/drojascam/",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    url: "https://www.instagram.com/drojas912/",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    url: "https://github.com/devup2332",
  },
];

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="px-8 h-screen grid place-items-center">
      <div className="text-text-1">
        <h1 className="text-5xl font-bold">{t("banner.title")}</h1>
        <h2 className="text-base mt-3 font-medium">{t("banner.subtitle")}</h2>
        <p className="text-text-2 mt-4">{t("banner.description")}</p>
        <div className="flex gap-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-none mt-6"
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>

        <div className="mt-6">
          <Button variant="primary">{t("banner.buttons.contact")}</Button>
          <Button variant="ghost" className="text-text-2">
            {t("banner.buttons.projects")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
