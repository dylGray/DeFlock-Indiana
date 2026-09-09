"use client";

import Image from "next/image";
import CityPicker from "./components/CityPicker";
import { Cctv, UserGroup, Map, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-screen items-center justify-center">
        <Image
            src="/images/flock-plainfield.webp"
            alt=""
            fill
            priority
            className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 text-center text-white">
            <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                See What&apos;s Watching Indiana
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">Tracking the growing use of <strong>Automated License Plate Readers (ALPRs)</strong> and bringing greater awareness to mass surveillance across Indiana.</p>
            </div>

            <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 overflow-hidden rounded-2xl border border-white/15 bg-black/45 backdrop-blur-sm md:grid-cols-2">
            <div className="flex flex-col items-center px-8 py-10 md:border-r md:border-white/15">
                <Cctv />

                <p className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">3,140+</p>

                <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-white/75">Flock Cameras Documented in Indiana</p>
            </div>

            <div className="flex flex-col items-center border-t border-white/15 px-8 py-10 md:border-t-0">
                <UserGroup />

                <p className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">3</p>

                <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-white/75">Communities Rejecting or Ending Flock</p>
            </div>
            </div>

            <div className="mx-auto mt-8 max-w-3xl">
              <CityPicker />
            </div>
            
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-900">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="pb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              What Are Automated License Plate Readers (ALPRs)?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">These are camera systems that automatically capture and analyze passing vehicles, creating a digital record of where and when a vehicle was observed.</p>

            <p className="mt-6 text-lg leading-8 text-slate-600">Unlike a traditional security camera that simply records video, ALPRs use software to extract information from each vehicle they detect. This can include the license plate, date, time, and location of the detection, as well as characteristics such as the vehicle&apos;s make, model, color, bumper stickers, roof racks, and visible damage.</p>

            <p className="mt-6 text-lg leading-8 text-slate-600">That information can then be stored as a searchable record. Instead of reviewing hours of camera footage, authorized users can search vehicle detections to determine where and when a particular vehicle was observed.</p>
          </div>

          <div className="relative mt-12 aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/flock-truck.jpg"
              alt="An Automated License Plate Reader (ALPR) camera deployed in the field"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              The Risks of Mass License Plate Surveillance
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">One of the most significant concerns surrounding these systems is their ability to record the movements of ordinary people who are not suspected of committing a crime. As vehicles pass ALPR cameras, their locations can be recorded without a warrant, probable cause, or individualized suspicion.</p>

            <p className="mt-5 text-lg leading-8 text-slate-300">The concern extends beyond the collection of this data. ALPR systems create databases of vehicle sightings that can be searched by authorized users, raising important questions about who has access, how that access is monitored, and what happens when the technology is used outside of its intended purpose.</p>

            <p className="mt-5 text-lg leading-8 text-slate-300"><a target="_blank" className="underline" href="">Flock Safety</a> is the dominant manufacturer behind this expansion. Its cameras make up the majority of documented ALPRs in the United States, giving the company an outsized role in how this surveillance infrastructure is deployed, connected, and accessed across communities.</p>

          </div>

          <div className="grid gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                Persistent Location Tracking
              </h3>

              <p className="mt-3 leading-7 text-slate-300">In 2026, an Indianapolis police officer was accused of using Flock searches to monitor vehicles associated with his wife and acquaintances. The officer allegedly conducted as many as 3,759 searches over a ten-month period. IMPD suspended the officer and opened an investigation into the activity.</p>

              <a
                href="https://indianacapitalchronicle.com/2026/08/24/indiana-lawmakers-looking-at-license-plate-cameras-amid-growing-privacy-worries/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-semibold text-sky-400 hover:text-sky-300"
              >
                Read the Indiana Capital Chronicle report →
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                Searchable Historical Records
              </h3>

              <p className="mt-3 leading-7 text-slate-300">A former Jackson County, Indiana deputy was charged after investigators alleged that he used Flock more than 2,000 times to search for his girlfriend&apos;s license plate. Authorities said some searches were falsely labeled as &quot;city planning/traffic analysis,&quot; showing how stored vehicle sightings can be repeatedly queried for personal purposes.</p>

              <a
                href="https://nypost.com/2026/09/02/us-news/ex-indiana-deputy-skylar-thompson-allegedly-used-flock-cameras-to-stalk-girlfriend-charged-with-felony/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-semibold text-sky-400 hover:text-sky-300"
              >
                Read about the Indiana case →
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">
                Expanding Access
              </h3>

              <p className="mt-3 leading-7 text-slate-300">In 2025, a Texas sheriff&apos;s office searched Flock&apos;s nationwide network for a woman who had reportedly self-administered an abortion. Audit records described the search as &quot;had abortion, search for female,&quot; and the query reached cameras far beyond the department&apos;s own jurisdiction.</p>

              <a
                href="https://www.wosu.org/politics-government/2026-08-27/columbus-flock-cameras-used-in-2025-search-for-texas-woman-who-had-abortion"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-semibold text-sky-400 hover:text-sky-300"
              >
                Read the WOSU investigation →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-900">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Image
                src="/images/deFlock-logo.png"
                alt="DeFlock logo"
                width={50}
                height={50}
                className="h-auto w-auto object-contain"
              />
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Explore DeFlock
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">DeFlock is an open-source project dedicated to documenting ALPRs across the United States. Its tools can help you see where ALPR cameras have been reported, better understand how the technology works, and learn more about the growing surveillance network being built across communities.</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <a
              href="https://maps.deflock.org/?lat=39.8283&lng=-98.5795&zoom=4.00"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                <Map className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                Explore the Camera Map
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-600">View community-reported ALPR locations across the country and see where license plate readers have been documented near your community.</p>

              <span className="mt-6 font-semibold text-sky-700 transition group-hover:text-sky-600">
                Open the DeFlock Map →
              </span>
            </a>

            <a
              href="https://deflock.org/report"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                <MapPin className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                Spot Cameras
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-600">Found an ALPR camera in your community? Learn how to identify these systems and report their locations to help keep DeFlock&apos;s community-built map up to date.</p>

              <span className="mt-6 font-semibold text-sky-700 transition group-hover:text-sky-600">
                Report a Camera →
              </span>
            </a>

            <a
              href="https://deflock.org/groups"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                <UserGroup className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                Get Involved
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-600">Connect with others working to bring greater transparency to ALPR surveillance. Find local DeFlock groups, meet people in your area, and get involved in your community.</p>

              <span className="mt-6 font-semibold text-sky-700 transition group-hover:text-sky-600">
                Find a Local Group →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}