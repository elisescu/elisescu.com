import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

export type PostMeta = {
  slug: string;
  title: string;
  date: Date;
  excerpt: string;
};

const POSTS_DIR = path.join(process.cwd(), "src/app/posts");

export async function getPosts(): Promise<PostMeta[]> {
  const entries = await readdir(POSTS_DIR, { withFileTypes: true });
  const slugs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = path.join(POSTS_DIR, slug, "page.mdx");

      try {
        await access(filePath);
      } catch {
        return null;
      }

      const source = await readFile(filePath, "utf8");
      const metadata = parseMetadata(source);
      if (metadata.unlisted) {
        return null;
      }

      return {
        slug,
        title: metadata.title ?? slug,
        date: metadata.date ? new Date(metadata.date) : new Date("2022-01-01"),
        excerpt: metadata.excerpt ?? metadata.description ?? "",
      };
    }),
  );

  return posts.filter((post): post is PostMeta => post !== null).sort((a, b) => b.date.getTime() - a.date.getTime());
}

function parseMetadata(source: string): {
  title?: string;
  date?: string;
  excerpt?: string;
  description?: string;
  unlisted?: boolean;
} {
  const blockMatch = source.match(/export const metadata\s*=\s*\{([\s\S]*?)\}\s*;/);
  if (!blockMatch) {
    return {};
  }

  const block = blockMatch[1];
  return {
    title: readStringField(block, "title"),
    date: readStringField(block, "date"),
    excerpt: readStringField(block, "excerpt"),
    description: readStringField(block, "description"),
    unlisted: readBooleanField(block, "unlisted"),
  };
}

function readStringField(block: string, key: string): string | undefined {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`${escapedKey}\\s*:\\s*["']([^"']*)["']`);
  const match = block.match(regex);
  return match?.[1];
}

function readBooleanField(block: string, key: string): boolean | undefined {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`${escapedKey}\\s*:\\s*(true|false)\\b`);
  const match = block.match(regex);
  if (!match) {
    return undefined;
  }

  return match[1] === "true";
}
