import { ContactSchemaFields } from "@/schemas/contactSchema";

export type Field = {
  name: ContactSchemaFields;
  label: string;
  placeholder: string;
  className?: string;
  type: string;
};
