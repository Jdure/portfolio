import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-secondary-content dark:bg-base-100">
        {children}
      </main>
      <Footer />
    </>
  );
}
