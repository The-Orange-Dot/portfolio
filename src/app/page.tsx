"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import React from "react";
import Contact from "./Contact";

export default function Home() {
  const container = React.useRef(null);

  useGSAP(
    () => {
      const element = document.getElementById("header-underscore");

      //Animation for blinking underscore
      gsap
        .timeline({
          repeat: -1,
          yoyo: true,
          delay: 1,
        })
        .to(element, {
          opacity: 1,
          duration: 0,
        })
        .to(element, { duration: 0.5 })
        .to(element, { duration: 0, opacity: 0 })
        .to(element, { duration: 0.2 });
    },
    { scope: container }
  );

  return (
    <div
      className="grid items-center w-screen min-h-screen pb-20 gap-16 sm:px-12"
      ref={container}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="flex min-h-screen w-screen justify-center items-center max-sm:flex-col">
          <div className="flex max-w-[1400px] w-full">
            <div className="flex w-1/2 h-[600px] justify-center items-center relative overfloe-hidden p-24 max-sm:hidden">
              <Image
                src="/test.jpg"
                alt="image"
                className="object-cover object-[80%]"
                fill
              />
            </div>
            <div className="flex jutify-center flex-col w-1/2 max-sm:w-full p-24 max-sm:p-12 max-sm:h-[80vh]">
              <h2 className="text-[120px] max-sm:text-[25vw] font-[800] leading-[130px] max-sm:leading-[27vw] mb-4">
                Hi, I'm Tom<span id="header-underscore">_</span>
              </h2>

              <p className="font-semibold text-xl mb-14">
                {`["Full-Stack Developer", "Software Engineer"]`}
              </p>
              <Contact />
            </div>
          </div>
        </section>

        <About />

        <Skills />

        <Projects />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
