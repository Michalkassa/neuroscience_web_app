import type { CSSProperties } from "react";

/** Old-style book serif used across the site. */
export const bookFont =
  '"Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif';

/** Plain sans-serif used to opt a page out of the site-wide book serif. */
export const sansFont = "Arial, Helvetica, sans-serif";

/**
 * Shared notebook UI class strings. Edit these in one place to retune every
 * form and card across the site.
 */
export const ui = {
  /** small-caps field label */
  label: "block text-sm uppercase tracking-[0.2em] text-[#5d6a70]",
  /** underlined single-line input */
  input:
    "mt-2 block w-full border-0 border-b border-[#8b989c] bg-transparent px-1 py-2 text-lg text-[#222b30] placeholder-[#90999b] focus:border-[#46535a] focus:outline-none",
  /** boxed multi-line input */
  textarea:
    "mt-2 block w-full resize-none border border-[#8b989c] bg-[#eef1f1] px-3 py-2 text-lg text-[#222b30] placeholder-[#90999b] focus:border-[#46535a] focus:outline-none",
  /** primary submit button */
  button:
    "w-full border border-[#46535a] bg-[#46535a] py-2.5 text-lg tracking-wide text-[#e6eaea] transition-colors hover:bg-[#333d43]",
  /** muted form panel (forms, login) */
  panel: "border border-[#8b989c] bg-[#e6eaea] p-8 shadow-[0_1px_0_#f1f4f4]",
  /** content card with vintage offset shadow (list posts) */
  card:
    "border border-[#46535a]/60 bg-[#eef1f1] p-5 shadow-[3px_3px_0_rgba(70,83,90,0.18)]",
  /** chapter-style section heading underline */
  sectionHeading:
    "mb-5 inline-block border-b-2 border-[#46535a] pb-1 text-3xl font-medium text-[#222b30]",
  /** outlined module/tag chip */
  chip:
    "shrink-0 rounded-sm border border-[#9aa6a9] px-2 py-0.5 text-xs uppercase tracking-[0.18em] text-[#46535a]",
  /** destructive (delete) button */
  deleteButton:
    "shrink-0 border border-[#b89b97] p-2 text-[#9b4a44] transition-colors hover:bg-[#9b4a44] hover:text-[#eef1f1]",
  /** edit (pencil) button — neutral sibling of deleteButton */
  editButton:
    "shrink-0 border border-[#9aa6a9] p-2 text-[#46535a] transition-colors hover:bg-[#46535a] hover:text-[#eef1f1]",
  /** assessment-type badge — formative (low-stakes, greenish) */
  badgeFormative:
    "inline-flex items-center rounded-sm border border-[#7e9277] bg-[#e3ebdf] px-2 py-0.5 text-xs font-medium uppercase tracking-[0.16em] text-[#48603f]",
  /** assessment-type badge — summative (graded, warm clay) */
  badgeSummative:
    "inline-flex items-center rounded-sm border border-[#b08c6b] bg-[#efe3d6] px-2 py-0.5 text-xs font-medium uppercase tracking-[0.16em] text-[#8a5a33]",
  /** small caps label used inside a meta grid */
  metaLabel:
    "text-[0.65rem] uppercase tracking-[0.18em] text-[#7a868b]",
  /** value text used inside a meta grid */
  metaValue: "text-[#37434a]",
} as const;

/** Toned blue-gray ruled-paper background used on full-page notebook screens. */
export const paperBackground: CSSProperties = {
  fontFamily: bookFont,
  backgroundColor: "#cfd6d6",
  backgroundImage: [
    "radial-gradient(ellipse at 50% -10%, rgba(255,255,255,0.30), rgba(40,60,70,0.12) 95%)",
    "repeating-linear-gradient(to bottom, transparent 0, transparent 37px, rgba(70,92,102,0.14) 37px, rgba(70,92,102,0.14) 38px)",
  ].join(","),
};
