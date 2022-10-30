import Head from 'next/head'
import Link, { LinkProps } from 'next/link'

import { Container } from '../components/container'
import Layout from '../components/layout'

import React from 'react'

import {
  TwitterIcon,
  LinkedInIcon,
  GitHubIcon,
  WritingIcon,
  PromptIcon,
} from '../components/icons'

const Circle = (props: { width: number; height: number }) => {
  return (
    <div
      className="block h-[200px]
                  w-[200px] rounded-full
                  border-[20px] border-primary-900
                  transition-all
                  hover:h-[220px] hover:w-[220px]
                  hover:border-[120px]"
    ></div>
  )
}

//function SocialLink(  { icon: React.ReactNode, ...props: React.ComponentPropsWithoutRef}) {
function IconLink<
  T extends { icon: React.ElementType } & React.PropsWithChildren<LinkProps>
>({ icon: Icon, ...props }: T) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="group-primary:fill-primary-800 h-6 w-6 fill-primary-500 transition dark:fill-primary-400 dark:group-hover:fill-primary-300" />
    </Link>
  )
}

export default function Index() {
  return (
    <>
      <Head>
        <title>elisescu</title>
      </Head>
      <Container className="mt-9 text-primary-800 selection:bg-primary-800 selection:text-white ">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-primary-800 dark:text-primary-100 sm:text-5xl">
            Software builder
          </h1>
          <p className="mt-6 text-base text-primary-600 dark:text-primary-400">
            I’m Elis Popescu, and I am building tech products in Copenhagen. I
            work by myself, or lead teams of engineers.
          </p>
          <div className="mt-6 flex gap-6">
            <IconLink
              href="https://github.com/elisescu/"
              aria-label="GitHub profile"
              icon={GitHubIcon}
            />
            <IconLink
              href="https://linkedin.com/in/elisescu/"
              aria-label="LinkedIn profile"
              icon={LinkedInIcon}
            />
            <IconLink href="/thoughts" aria-label="Blog" icon={WritingIcon} />
            {/* <IconLink
              href="/projects/"
              aria-label="Projects"
              icon={PromptIcon}
            /> */}
            <IconLink
              href="https://twitter.com/elisescu"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
          </div>
        </div>
      </Container>
    </>
  )
}
