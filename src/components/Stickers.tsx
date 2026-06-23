import React from "react";
import Image from "next/image";

type Sticker = {
  image: string;
  className: string;
  position: string;
  tilt: string;
};

export type StickerVariant = "login" | "feedback" | "reading" | "assignments";

/**
 * Per-page sticker arrangements. Each page gets a different mix of specimens in
 * different corners so the background never repeats and feels hand-arranged.
 */
const variants: Record<StickerVariant, Sticker[]> = {
  login: [
    {
      image: "/microscope.png",
      className: "right-3 top-24 h-28 w-28 sm:h-40 sm:w-40",
      position: "86% 48%",
      tilt: "6deg",
    },
    {
      image: "/device.png",
      className: "-left-4 bottom-6 h-28 w-28 sm:h-40 sm:w-40",
      position: "50% 55%",
      tilt: "-5deg",
    },
    {
      image: "/gel.png",
      className: "left-8 top-28 h-20 w-20 sm:h-28 sm:w-28",
      position: "60% 50%",
      tilt: "9deg",
    },
  ],
  feedback: [
    {
      image: "/eeg.png",
      className: "left-12 top-32 h-40 w-40 sm:h-52 sm:w-52",
      position: "16% 62%",
      tilt: "-7deg",
    },
    {
      image: "/pipette.png",
      className: "right-14 top-36 h-40 w-40 sm:h-52 sm:w-52",
      position: "38% 78%",
      tilt: "6deg",
    },
    {
      image: "/Untitled_Artwork.png",
      className: "right-20 bottom-16 h-40 w-40 sm:h-52 sm:w-52",
      position: "70% 52%",
      tilt: "-4deg",
    },
    {
      image: "/gel.png",
      className: "left-24 bottom-20 h-28 w-28 sm:h-36 sm:w-36",
      position: "60% 50%",
      tilt: "5deg",
    },
  ],
  reading: [
    {
      image: "/microscope.png",
      className: "-left-4 bottom-8 h-32 w-32 sm:h-44 sm:w-44",
      position: "86% 48%",
      tilt: "5deg",
    },
    {
      image: "/gel.png",
      className: "right-5 top-24 h-20 w-20 sm:h-28 sm:w-28",
      position: "60% 50%",
      tilt: "-8deg",
    },
    {
      image: "/device.png",
      className: "left-4 top-28 h-28 w-28 sm:h-36 sm:w-36",
      position: "50% 55%",
      tilt: "4deg",
    },
    {
      image: "/Untitled_Artwork.png",
      className: "right-1 -bottom-2 h-28 w-28 sm:h-40 sm:w-40",
      position: "70% 52%",
      tilt: "-5deg",
    },
  ],
  assignments: [
    {
      image: "/pipette.png",
      className: "left-3 top-24 h-28 w-28 sm:h-40 sm:w-40",
      position: "38% 78%",
      tilt: "-6deg",
    },
    {
      image: "/eeg.png",
      className: "right-3 bottom-6 h-28 w-28 sm:h-40 sm:w-40",
      position: "16% 62%",
      tilt: "7deg",
    },
    {
      image: "/microscope.png",
      className: "right-1 top-28 h-24 w-24 sm:h-32 sm:w-32",
      position: "86% 48%",
      tilt: "-4deg",
    },
  ],
};

interface StickersProps {
  variant?: StickerVariant;
}

/** Ambient watercolour stickers tucked into the corners of the viewport. */
const Stickers: React.FC<StickersProps> = ({ variant = "feedback" }) => {
  return (
    <>
      {variants[variant].map((s, i) => (
        <div
          key={i}
          aria-hidden
          className={`pointer-events-none fixed z-0 opacity-90 ${s.className}`}
          style={{ transform: `rotate(${s.tilt})` }}
        >
          <div className="relative h-full w-full">
            <Image src={s.image} alt="" fill className="object-contain" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Stickers;
