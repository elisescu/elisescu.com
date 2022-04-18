import Footer from "./footer";
import Meta from "./meta";
import { Navbar } from "./navbar";

import React, { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren<{}>) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navbar />
        <main className=" max-w-4xl mx-auto">{props.children}</main>
      </div>
      <Footer />
    </>
  );
}
