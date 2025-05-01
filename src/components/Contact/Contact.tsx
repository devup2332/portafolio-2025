import { useTranslation } from "react-i18next";
import EmailIcon from "../Icons/EmailIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, contactSchema } from "@/schemas/contactSchema";
import CodeIcon from "../Icons/CodeIcon";
import GithubIcon from "../Icons/GithubIcon";
import LoaderIcon from "../Icons/LoaderIcon";
import { useState } from "react";
import { sleep } from "@/utils/sleep";
import { contactFields } from "@/config/contactFields";
import { toast } from "sonner";
import Toast from "../Toast/Toast";

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

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const sendMessage = async (data: ContactSchema) => {
    setLoading(true);
    await sleep(2000);
    setLoading(false);
    reset();
    toast.custom(
      () => <Toast type="success" text={t("contact.form.messages.success")} />,
      {
        position: "bottom-center",
      },
    );
    console.log({ data });
  };
  const handleError = () => {
    console.log({ errors });
  };
  return (
    <div id="contact">
      <h1 className="text-text-1 text-[32px] font-bold xl:text-4xl">
        {t("contact.title")}
      </h1>
      <h2 className="text-text-2 text-sm mt-3 lg:text-base xl:text-lg">
        {t("contact.subtitle")}
      </h2>
      <div className="mt-16 lg:flex">
        <div className="grid gap-8 text-sm lg:w-1/2 h-fit">
          <div className="flex items-center gap-4">
            <EmailIcon className="w-6 h-6 text-primary stroke-current" />
            <p className="text-text-1">devup2332@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <LinkedinIcon className="w-6 h-6 text-primary stroke-current" />
            <p className="text-text-1">linkedin.com/in/drojascam</p>
          </div>
          <div className="flex items-center gap-4">
            <InstagramIcon className="w-6 h-6 text-primary stroke-current" />
            <p className="text-text-1">instagram.com/drojas912</p>
          </div>
        </div>

        <form
          className="mt-18 grid gap-4 lg:w-1/2 lg:mt-0 xl:gap-8 2xl:grid-cols-2"
          onSubmit={handleSubmit(sendMessage, handleError)}
        >
          {contactFields.map((field) => {
            const { name, label, placeholder, type } = field;
            const error = errors[name] ? errors[name].message : "";
            return (
              <FormField
                key={name}
                register={register}
                className={field.className}
                error={error}
                name={name}
                label={label}
                placeholder={placeholder}
                type={type}
              />
            );
          })}

          <Button
            type="submit"
            className="w-full flex justify-center items-center gap-4 2xl:col-span-2"
            variant="primary"
            disabled={loading}
          >
            {loading && <LoaderIcon className="w-6 h-6 animate-spin" />}
            {t("contact.form.button")}
          </Button>
        </form>
      </div>

      <div className="mt-20 grid gap-3 justify-center lg:mt-32 lg:gap-6">
        <div className="flex justify-center items-center gap-3">
          <CodeIcon className="w-6 h-6 text-text-1 stroke-current" />
          <span className="font-bold text-xl">{t("footer.title")}</span>
        </div>
        <div className="flex gap-3 items-center justify-center">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-none lg:hover:scale-110 lg:hover:text-primary transition-all"
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
        <p className="text-text-2 text-sm text-center">
          {t("footer.description")}
        </p>
      </div>
    </div>
  );
};

export default Contact;
