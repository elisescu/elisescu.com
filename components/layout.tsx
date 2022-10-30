import Footer from './footer'
import Meta from './meta'
import { Navbar } from './navbar'

import React, { PropsWithChildren } from 'react'

export default function Layout(props: PropsWithChildren<{}>) {
  return (
    <>
      <Meta />
      <div className="mx-auto min-h-screen max-w-5xl px-2 text-primary-800  selection:bg-primary-800  selection:text-white sm:px-6 lg:px-8  ">
        <Navbar />
        <main className="max-w-4xl">{props.children}</main>
      </div>
      <Footer />
    </>
  )
}
