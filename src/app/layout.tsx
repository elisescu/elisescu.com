import type { Metadata } from "next";
import "./globals.css";
import { PostHogInit } from "@/components/posthog-init";

export const metadata: Metadata = {
  title: "elisescu",
  description: "Personal site and writing by Elis Popescu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PostHogInit />
        {children}
      </body>
    </html>
  );
}
