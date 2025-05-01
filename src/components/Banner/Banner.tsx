import { useTranslation } from "react-i18next";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import Button from "../Button/Button";
import { goToSection } from "@/utils/sections";

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
    <div className="h-dvh grid place-items-center" id="banner">
      <div className="text-text-1 -translate-y-4 lg:flex">
        <div className="lg:w-6/12 lg:flex lg:flex-col lg:justify-center xl:w-5/12">
          <h1 className="text-5xl font-bold lg:text-6xl xl:text-7xl">
            {t("banner.title")}
          </h1>
          <h2 className="text-base mt-3 lg:mt-4 font-medium">
            {t("banner.subtitle")}
          </h2>
          <p className="text-text-2 mt-4 lg:mt-8 text-sm lg:text-base">
            {t("banner.description")}
          </p>
          <div className="flex gap-4 mt-6 lg:mt-8">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-none hover:text-primary lg:hover:scale-110 transition-all"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          <div className="mt-6">
            <Button variant="primary" onClick={() => goToSection("contact")}>
              {t("banner.buttons.contact")}
            </Button>
            <Button
              variant="ghost"
              className="text-text-2"
              onClick={() => goToSection("projects")}
            >
              {t("banner.buttons.projects")}
            </Button>
          </div>
        </div>
        <div className="hidden lg:block w-6/12 xl:w-7/12">
          <img
            className="w-full h-full object-cover"
            src="/images/banner.png"
            alt="Banner image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
