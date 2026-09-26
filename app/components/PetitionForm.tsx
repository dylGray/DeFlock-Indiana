"use client";

import { useActionState } from "react";
import { CheckCircle2 } from "lucide-react";
import { submitPetition, type PetitionFormState } from "@/app/actions";

const initialState: PetitionFormState = { ok: false };

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20";

function FieldError({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null;
  return <p className="mt-2 text-sm text-red-600">{messages[0]}</p>;
}

export default function PetitionForm() {
  const [state, formAction, pending] = useActionState(submitPetition, initialState);

  if (state.ok) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm">
        <CheckCircle2 className="h-10 w-10 text-sky-600" />

        <h3 className="mt-4 text-2xl font-semibold text-slate-900">
          Thanks for signing, {state.firstName}!
        </h3>

        <p className="mt-2 leading-7 text-slate-600">
          Your name has been added to the petition. Share this page with others in Indiana to help grow support for getting Flock cameras out of our state.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="text-sm font-semibold text-slate-900">
            First name
          </label>

          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            maxLength={50}
            autoComplete="given-name"
            defaultValue={state.values?.firstName}
            placeholder="Jane"
            className={inputClass}
          />
          <FieldError messages={state.fieldErrors?.firstName} />
        </div>

        <div>
          <label htmlFor="lastName" className="text-sm font-semibold text-slate-900">
            Last name
          </label>

          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            maxLength={50}
            autoComplete="family-name"
            defaultValue={state.values?.lastName}
            placeholder="Doe"
            className={inputClass}
          />
          <FieldError messages={state.fieldErrors?.lastName} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="text-sm font-semibold text-slate-900">
          Email address <span className="font-normal text-slate-500">(optional)</span>
        </label>

        <input
          id="email"
          name="email"
          type="email"
          maxLength={254}
          autoComplete="email"
          defaultValue={state.values?.email}
          placeholder="jane@example.com"
          className={inputClass}
        />
        <FieldError messages={state.fieldErrors?.email} />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-semibold text-slate-900">
          Message <span className="font-normal text-slate-500">(optional)</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1000}
          defaultValue={state.values?.message}
          placeholder="Why does this matter to you?"
          className={inputClass}
        />
        <FieldError messages={state.fieldErrors?.message} />
      </div>

      {/* {state.error && <p className="mt-5 text-sm text-red-600">{state.error}</p>} */}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 w-full rounded-xl bg-slate-900 px-6 py-4 text-lg font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Signing..." : "Sign the Petition"}
      </button>

      <p className="mt-4 text-center text-xs text-slate-500">
        By signing, you agree that your name may be included in a petition delivered to Indiana state and local officials. Your data will never be shared with anyone outside <strong>DeFlock Indiana</strong>.
      </p>
    </form>
  );
}
