import React from "react";
import Banner from "./Banner";
import dynamic from "next/dynamic";
import Footer from "./Footer";
// import LiveVideo from "./LiveVideo";

const About = dynamic(() => import("./About"));
const Skills = dynamic(() => import("./Skills"));
const Projects = dynamic(() => import("./Projects"));

export default function Home() {
  return (
    <div className="grid items-center w-full overflow-x-hidden min-h-screen gap-16 sm:px-12">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start overflow-x-hidden">
        <Banner />
        <About />
        {/* <LiveVideo /> */}
        <Skills />
        <Projects />
      </main>
      <footer className="row-start-3 flex gap-6 py-2 max-sm:py-4 flex-wrap items-center justify-center border-t border-color text-center">
        <Footer />
      </footer>
    </div>
  );
}
