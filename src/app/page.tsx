"use client";
import Image from "next/image";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import React from "react";
import Banner from "./Banner";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="grid items-center w-full overflow-x-hidden min-h-screen gap-16 sm:px-12">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start overflow-x-hidden">
        <Banner />
        <About />
        <Skills />
        <Projects />
      </main>
      <footer className="row-start-3 flex gap-6 py-2 max-sm:py-4 flex-wrap items-center justify-center border-t border-color text-center">
        <p className="max-sm:text-sm max-sm:px-6">{`Designed and built by Tom Le | © Copyright Tom Le ${year} | All Rights Reserved`}</p>
      </footer>
    </div>
  );
}
