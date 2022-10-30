import Head from 'next/head'
import Layout from '../components/layout'
import React from 'react'
import { getAllPosts } from '../lib/api'
import Link from 'next/link'
import DateFormatter from '../components/date-formatter'

type Post = {
  slug: string
  title: string
  coverImage: string
  date: string
  excerpt: string
}

export default function Index({ allPosts }: { allPosts: Post[] }) {
  return (
    <>
      <Layout>
        <section className="">
          <h2 className="my-8 text-2xl font-bold leading-tight tracking-tighter">
            Thoughts
          </h2>
          {/* <div className="grid grid-cols-2 gap-y-4 pb-8 border-b"> */}
          <div className="mt-16 flex max-w-3xl flex-col space-y-16">
            {allPosts &&
              allPosts.map((post) => (
                <div key={post.title} className="">
                  <p className="text-sm text-gray-400">
                    <DateFormatter dateString={post.date} />
                  </p>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="text-md font-bold border-b-2 border-transparent  text-gray-700  hover:border-primary-800 hover:text-gray-800 "
                  >
                    {post.title}
                  </Link>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
