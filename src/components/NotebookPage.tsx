import React from "react";

interface NotebookPageProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  ornament?: boolean;
  children: React.ReactNode;
}

/** Full-page notebook shell: ruled paper, centred masthead, ornamental rule. */
const NotebookPage: React.FC<NotebookPageProps> = ({
  eyebrow,
  title,
  intro,
  ornament = true,
  children,
}) => {
  return (
    <main className="relative min-h-screen overflow-hidden text-[#222b30]">
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-14 sm:py-16">
        <header className="mb-12 text-center">
          {eyebrow && (
            <p className="text-sm uppercase tracking-[0.4em] text-[#5d6a70]">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[#46535a]">
              {intro}
            </p>
          )}
          {ornament && (
            <div className="mx-auto mt-8 flex max-w-[16rem] items-center gap-4 text-[#7e8c91]">
              <span className="h-px flex-1 bg-current" />
              <span aria-hidden>✦</span>
              <span className="h-px flex-1 bg-current" />
            </div>
          )}
        </header>
        {children}
      </div>
    </main>
  );
};

export default NotebookPage;
