'use server';

import { prisma } from '@/lib/prisma';
import { formRateLimit } from '@/lib/rate-limit';
import { headers } from 'next/headers';
import z from 'zod';

const PetitionSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(50),
  lastName: z.string().trim().min(1, 'Last name is required').max(50),
  email: z.union([
    z.literal(''),
    z.email('Invalid email address').max(254),
  ]),
  message: z.string().trim().max(1000),
});

type PetitionFields = z.infer<typeof PetitionSchema>;

// Partial<T> takes an object type, and makes every property optional
export type PetitionFormState = {
  ok: boolean;
  firstName?: string;
  message?: string;
  fieldErrors?: Partial<Record<keyof PetitionFields, string[]>>;
  values?: Partial<Record<keyof PetitionFields, string>>;
};

export async function submitPetition(_prev: PetitionFormState, formData: FormData): Promise<PetitionFormState> {
  const values = {
    firstName: String(formData.get('firstName') ?? ''),
    lastName: String(formData.get('lastName') ?? ''),
    email: String(formData.get('email') ?? ''),
    message: String(formData.get('message') ?? ''),
  };

  const result = PetitionSchema.safeParse(values);

  if (!result.success) {
    return {
      ok: false,
      fieldErrors: z.flattenError(result.error).fieldErrors,
      values,
    };
  }

  // rate limiting based on IP address
  const headersList = await headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  const ip =
    forwardedFor?.split(',')[0]?.trim() ??
    headersList.get('x-real-ip') ??
    'unknown';

  const rateLimit = await formRateLimit.limit(`ip:${ip}`);

  if (!rateLimit.success) {
    return {
      ok: false,
      message: `Too many submissions. Please try again later. IP ${ip}`,
      values,
    };
  }

  try {
    await prisma.formSubmission.create({
      data: {
        firstName: result.data.firstName,
        lastName: result.data.lastName,
        email: result.data.email || null,
        message: result.data.message || null,
      },
    });

    return {
      ok: true,
      firstName: result.data.firstName,
    };
  } catch (error) {
    console.error('Failed to save petition signature', error);

    return {
      ok: false,
      message: 'Something went wrong. Please try again.',
      values,
    };
  }
}
