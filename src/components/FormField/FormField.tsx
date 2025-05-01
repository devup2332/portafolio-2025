import { ContactSchema, ContactSchemaFields } from "@/schemas/contactSchema";
import { cn } from "@/utils/cn";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";

type Props = {
  name: ContactSchemaFields;
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegister<ContactSchema>;
  error?: string;
  errorsState?: FieldErrors<FieldValues>;
  className?: string;
};

const FormField: React.FC<Props> = ({
  label,
  name,
  placeholder,
  error,
  type,
  register,
  className,
}) => {
  const { t } = useTranslation();
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <label
        className={cn("font-sm text-text-1 text-sm", error && "text-red-500")}
      >
        {t(label)}
      </label>
      {type === "textarea" ? (
        <textarea
          placeholder={t(placeholder)}
          className={cn(
            "rounded-md h-52 text-sm px-4 py-4 outline-none placeholder:text-text-2 border-border-1 border-[1px]",
            error && "border-red-500 placeholder:text-red-500",
          )}
          {...register(name)}
        />
      ) : (
        <input
          type={type}
          placeholder={t(placeholder)}
          autoComplete="off"
          className={cn(
            "rounded-md h-10 px-4 text-sm outline-none placeholder:text-text-2 border-border-1 border-[1px]",
            error && "border-red-500 placeholder:text-red-500",
          )}
          {...register(name)}
        />
      )}
      {error && <span className="text-red-500 text-xs">{t(error)}</span>}
    </div>
  );
};

export default FormField;
