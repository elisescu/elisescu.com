import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata = {
  title: "Thoughts",
  description: "Articles and notes by Elis Popescu.",
};

export default async function ThoughtsPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-10 text-primary-800 lg:px-8">
      <section>
        <h1 className="my-8 text-2xl font-bold leading-tight tracking-tighter">Thoughts</h1>
        <div className="mt-16 flex max-w-3xl flex-col space-y-16">
          {posts.map((post) => (
            <div key={post.slug}>
              <p className="text-sm text-primary-400">{formatDate(post.date)}</p>
              <Link
                href={`/posts/${post.slug}`}
                className="text-md border-b-2 border-transparent font-bold text-primary-700 hover:border-primary-800 hover:text-primary-800"
              >
                {post.title}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
