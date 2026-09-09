"use client";

import { useState } from "react";
import { CctvOff, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 isolate z-30 bg-black/80 text-white backdrop-blur will-change-transform">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <CctvOff className="h-6 w-6" aria-hidden="true" />

          <span>DeFlock Indiana</span>

          <Image
            src="/images/indiana-flag.png"
            alt="Indiana"
            width={40}
            height={40}
            className="object-contain ml-1"
          />
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-wider sm:flex">
          <li>
            <Link
              href="https://deflock.org"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white/70"
            >
              deFlock.org
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="sm:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col items-center gap-4 border-t border-white/15 px-6 py-4 text-sm font-semibold uppercase tracking-wider sm:hidden">
          <li>
            <Link
              href="https://deflock.org"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="transition hover:text-white/70"
            >
              deFlock.org
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}