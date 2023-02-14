import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import Head from "next/head";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <Head>
        <title>Code by JD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-secondary-content dark:bg-base-100">
        {children}
      </main>
      <Footer />
    </>
  );
}
