import { ContactSchema, ContactSchemaFields } from "@/schemas/contactSchema";
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
};

const FormField: React.FC<Props> = ({
  label,
  name,
  placeholder,
  error,
  type,
  register,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-3">
      <label className="font-sm text-text-1">{t(label)}</label>
      {type === "textarea" ? (
        <textarea
          placeholder={t(placeholder)}
          className="rounded-md h-52 text-sm px-4 py-4 outline-none placeholder:text-text-2 border-border-1 border-[1px]"
          {...register(name)}
        />
      ) : (
        <input
          type={type}
          placeholder={t(placeholder)}
          autoComplete="off"
          className="rounded-md h-10 px-4 text-sm outline-none placeholder:text-text-2 border-border-1 border-[1px]"
          {...register(name)}
        />
      )}
      {error && <span className="text-red-500 text-xs">{t(error)}</span>}
    </div>
  );
};

export default FormField;
