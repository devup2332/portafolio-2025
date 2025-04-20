import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, {
    message: "contact.form.fields.name.errors.required",
  }),
  email: z
    .string()
    .min(1, {
      message: "contact.form.fields.email.errors.required",
    })
    .email("contact.form.fields.email.errors.invalid"),
  subject: z.string().min(1, {
    message: "contact.form.fields.subject.errors.required",
  }),
  message: z.string().min(1, {
    message: "contact.form.fields.message.errors.required",
  }),
});

export type ContactSchema = z.infer<typeof contactSchema>;

export type ContactSchemaFields = keyof ContactSchema;
