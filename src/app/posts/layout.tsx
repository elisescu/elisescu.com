import Link from "next/link";
import type { ReactNode } from "react";

export default function PostsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto min-h-screen max-w-5xl px-6 py-6 text-primary-800 selection:bg-primary-800 selection:text-white lg:px-8">
      <nav className="mb-8 flex h-16 items-center justify-between border-b border-primary-200">
        <Link
          href="/"
          className="inline-flex items-center border-b-2 border-transparent pb-2 pt-1 text-xs font-medium uppercase tracking-wide text-primary-700 hover:border-primary-800 hover:text-primary-900"
        >
          Home
        </Link>
        <Link
          href="/thoughts"
          className="inline-flex items-center border-b-2 border-transparent pb-2 pt-1 text-xs font-medium uppercase tracking-wide text-primary-600 hover:border-primary-800 hover:text-primary-800"
        >
          Thoughts
        </Link>
      </nav>
      <main className="max-w-4xl">
        <article className="prose prose-zinc max-w-3xl prose-headings:font-display">
          {children}
        </article>
      </main>
    </div>
  );
}
