import Link from "next/link";
import Image from "next/image";
import React from "react";

type Entry = {
  numeral: string;
  title: string;
  href: string;
  image: string;
  alt: string;
  /** object-position so the painted subject sits centred in its frame */
  position: string;
  /** a little hand-pasted tilt applied to the sketch only */
  tiltClass: string;
};

const entries: Entry[] = [
  {
    numeral: "fig. I",
    title: "Feedback",
    href: "/feedback",
    image: "/eeg.png",
    alt: "Watercolour illustration of an EEG electrode cap",
    position: "16% 62%",
    tiltClass: "rotate-[-3deg]",
  },
  {
    numeral: "fig. II",
    title: "Reading List",
    href: "/reading-list",
    image: "/microscope.png",
    alt: "Watercolour illustration of a laboratory microscope",
    position: "86% 48%",
    tiltClass: "rotate-[2deg]",
  },
  {
    numeral: "fig. III",
    title: "Assignments",
    href: "/assignments",
    image: "/device.png",
    alt: "Watercolour illustration of a laboratory recording device",
    position: "38% 78%",
    tiltClass: "rotate-[-1.5deg]",
  },
];

export default function Home() {
  return (
    <main className="relative flex h-[calc(100vh-114px)] flex-col overflow-hidden text-[#222b30]">
      {/* the three sketches, pinned across the page */}
      <div className="relative z-10 flex flex-1 flex-wrap items-center justify-center gap-x-14 gap-y-10 px-8 py-8 sm:gap-x-28">
        {entries.map((entry) => (
          <Link
            key={entry.href}
            href={entry.href}
            className="group flex flex-col items-center"
          >
            <div
              className={`relative h-56 w-56 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-0 sm:h-72 sm:w-72 ${entry.tiltClass}`}
            >
              <Image
                src={entry.image}
                alt={entry.alt}
                fill
                priority
                className="object-contain"
              />
            </div>

            <span className="mt-3 text-xl tracking-wide text-[#67747a]">
              {entry.numeral}
            </span>
            <span className="text-4xl leading-snug underline decoration-[#67747a]/0 underline-offset-8 transition-colors duration-300 group-hover:decoration-[#46535a] sm:text-5xl">
              {entry.title}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
