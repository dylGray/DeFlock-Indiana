import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-16 overflow-hidden rounded shadow-sm">
              <Image
                src="/images/american-flag.png"
                alt="American flag"
                fill
                className="object-cover"
              />
            </div>

            <div className="h-8 w-px bg-white/20" />

            <div className="relative h-10 w-16 overflow-hidden rounded shadow-sm">
              <Image
                src="/images/indiana-flag.png"
                alt="Indiana state flag"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-2xl text-center md:text-right">
            <blockquote className="text-lg italic leading-7 text-white/80">
              &ldquo;Those who would give up essential Liberty, to purchase a little temporary Safety, deserve neither Liberty nor Safety.&rdquo;
            </blockquote>

            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/50">— Benjamin Franklin</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">DeFlock Indiana — Promoting transparency and awareness around Automated License Plate Readers in Indiana.</p>
        </div>
      </div>
    </footer>
  );
}