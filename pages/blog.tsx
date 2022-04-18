import Head from "next/head";
import Layout from "../components/layout";
import React from "react";
import { getAllPosts } from "../lib/api";
import Link from "next/link";
import DateFormatter from "../components/date-formatter";

type Post = {
  slug: string;
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
};

export default function Index({ allPosts }: { allPosts: Post[] }) {
  return (
    <>
      <Layout>
        <section className="text-center">
          <h2 className="mb-8 text-2xl font-bold tracking-tighter leading-tight">
            Posts
          </h2>
          <div className="grid gap-y-4 pb-8 border-b">
            {allPosts &&
              allPosts.map((post) => (
                <div key={post.title} className="flex gap-x-4">
                  <p className="text-gray-400">
                    <DateFormatter dateString={post.date} />
                  </p>
                  <Link href={`/posts/${post.slug}`}>
                    <a className="text-gray-700 font-medium border-transparent border-b-2  hover:border-amber-800 hover:text-gray-800 ">
                      {post.title}
                    </a>
                  </Link>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
