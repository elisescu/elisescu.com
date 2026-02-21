import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { GitHubIcon, LinkedInIcon, TwitterIcon, WritingIcon } from "@/components/icons";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-10 text-primary-800 selection:bg-primary-800 selection:text-white lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-primary-800 sm:text-5xl">
          Software builder
        </h1>
        <p className="mt-6 text-base text-primary-600">
          I&apos;m Elis Popescu, and I am building tech products in Copenhagen.
          I work by myself, or lead teams of engineers.
        </p>
        <div className="mt-6 flex gap-6">
          <SocialIconLink
            href="https://github.com/elisescu/"
            label="GitHub profile"
            icon={GitHubIcon}
          />
          <SocialIconLink
            href="https://linkedin.com/in/elisescu/"
            label="LinkedIn profile"
            icon={LinkedInIcon}
          />
          <SocialIconLink href="/thoughts" label="Blog" icon={WritingIcon} />
          <SocialIconLink
            href="https://twitter.com/elisescu"
            label="Follow on Twitter"
            icon={TwitterIcon}
          />
        </div>
      </div>
      </main>
  );
}

type SocialIconLinkProps = {
  href: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

function SocialIconLink({ href, label, icon: Icon }: SocialIconLinkProps) {
  const external = href.startsWith("http");

  const content = (
    <span className="group -m-1 p-1" aria-label={label}>
      <Icon className="h-6 w-6 fill-primary-500 transition group-hover:fill-primary-800" />
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
