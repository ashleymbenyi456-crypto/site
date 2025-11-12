"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long."),
});

type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    service?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // Here you would typically send an email, save to a CRM, etc.
    // For this example, we'll just simulate a successful submission with a delay.
    console.log("New contact form submission:", validatedFields.data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      status: "success",
      message: "Thank you for your message! We'll be in touch soon.",
    };
  } catch (e) {
    console.error(e);
    return {
      status: "error",
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
