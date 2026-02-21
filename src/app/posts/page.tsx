import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata = {
  title: "Posts",
  description: "All writing posts.",
};

export default async function PostsIndexPage() {
  const posts = await getPosts();

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
