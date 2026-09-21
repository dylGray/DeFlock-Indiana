"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function PetitionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim()) return;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm">
        <CheckCircle2 className="h-10 w-10 text-sky-600" />

        <h3 className="mt-4 text-2xl font-semibold text-slate-900">
          Thanks for signing, {name.trim().split(" ")[0]}!
        </h3>

        <p className="mt-2 leading-7 text-slate-600">
          Your name has been added to the petition. Share this page with others in Indiana to help grow support for getting Flock cameras out of our state.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
    >
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-slate-900">
          Full name
        </label>

        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Jane Doe"
          className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="text-sm font-semibold text-slate-900">
          Email address
        </label>

        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="jane@example.com"
          className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="petition-city" className="text-sm font-semibold text-slate-900">
          City or town <span className="font-normal text-slate-500">(optional)</span>
        </label>

        <input
          id="petition-city"
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Indianapolis"
          className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20"
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-slate-900 px-6 py-4 text-lg font-semibold text-white transition hover:bg-slate-800"
      >
        Sign the Petition
      </button>

      <p className="mt-4 text-center text-xs text-slate-500">
        By signing, you agree that your name may be included in a petition delivered to Indiana state and local officials. Your data will never be shared with anyone outside <strong>DeFlock Indiana</strong>.
      </p>
    </form>
  );
}
