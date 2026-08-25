import Link from "next/link";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-medium tracking-tight text-[#2F3E2F] md:text-5xl">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="mt-14 mb-5 text-2xl font-medium tracking-tight text-[#2F3E2F] md:text-3xl">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="mt-10 mb-4 text-xl font-medium text-[#2F3E2F]">
      {children}
    </h3>
  ),

  p: ({ children }) => (
    <p className="mb-6 text-base leading-8 text-[#2F3E2F]/75 md:text-lg">
      {children}
    </p>
  ),

  strong: ({ children }) => (
    <strong className="font-semibold text-[#2F3E2F]">
      {children}
    </strong>
  ),

  a: ({ href, children }) => {
  const isInternal = href?.startsWith("/");

  if (isInternal) {
    return (
      <Link
        href={href}
        className="font-medium text-[#5A6B4E] underline underline-offset-4 transition-opacity hover:opacity-60"
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[#5A6B4E] underline underline-offset-4 transition-opacity hover:opacity-60"
    >
      {children}
    </a>
  );
},

  ul: ({ children }) => (
    <ul className="mb-6 ml-6 list-disc space-y-2 text-[#2F3E2F]/75">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="mb-6 ml-6 list-decimal space-y-2 text-[#2F3E2F]/75">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="pl-2 leading-7">
      {children}
    </li>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}