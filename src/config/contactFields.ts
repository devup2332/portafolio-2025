import { Field } from "@/types/contact";

export const contactFields: Field[] = [
  {
    name: "name",
    label: "contact.form.fields.name.label",
    placeholder: "contact.form.fields.name.placeholder",
    type: "text",
  },
  {
    name: "email",
    label: "contact.form.fields.email.label",
    placeholder: "contact.form.fields.email.placeholder",
    type: "email",
  },
  {
    name: "subject",
    label: "contact.form.fields.subject.label",
    placeholder: "contact.form.fields.subject.placeholder",
    type: "text",
  },
  {
    name: "message",
    label: "contact.form.fields.message.label",
    placeholder: "contact.form.fields.message.placeholder",
    type: "textarea",
  },
];
