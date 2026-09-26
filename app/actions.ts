"use server";

import { prisma } from "@/lib/prisma";
import z from "zod";

const PetitionSchema = z.object({
  firstName: z.string().trim().min(1, { error: "First name is required" }).max(50),
  lastName: z.string().trim().min(1, { error: "Last name is required" }).max(50),
  email: z.union([z.literal(""), z.email({ error: "Invalid email address" }).max(254)]).optional(),
  message: z.string().trim().max(1000).optional(),
});

type PetitionFields = z.infer<typeof PetitionSchema>;

export type PetitionFormState = {
  ok: boolean;
  firstName?: string;
  error?: string;
  errors?: Partial<Record<keyof PetitionFields, string[]>>;
  // What the user typed, so the inputs can be refilled after a failed submit
  values?: Partial<Record<keyof PetitionFields, string>>;
};

export async function submitPetition(_prev: PetitionFormState, formData: FormData): Promise<PetitionFormState> {
  const values = {
    firstName: String(formData.get("firstName") ?? ""),
    lastName: String(formData.get("lastName") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const result = PetitionSchema.safeParse(values);

  if (!result.success) {
    return { ok: false, errors: z.flattenError(result.error).fieldErrors, values };
  }

  const { firstName, lastName, email, message } = result.data;

  try {
    await prisma.formSubmission.create({
      data: {
        firstName,
        lastName,
        email: email ? email.toLowerCase() : null,
        message: message || null,
      },
    });
  } catch (error) {
    console.error("Failed to save petition signature", error);
    return { ok: false, error: "Something went wrong. Please try again.", values };
  }

  return { ok: true, firstName };
}
