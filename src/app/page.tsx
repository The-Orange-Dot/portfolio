"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import React from "react";
import Git from "./icons/Git";
import { useTheme } from "next-themes";
import LinkedIn from "./icons/LinkedIn";
import Gmail from "./icons/Gmail";

export default function Home() {
  const container = React.useRef(null);
  const [tl, setTl] = React.useState<null | gsap.core.Timeline>(null);
  const { theme } = useTheme();

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

      const timeline = gsap.timeline({ paused: true }).to("#resume", {
        borderRadius: 14,
        backgroundColor: "#fff",
        color: "#000",
        border: "1px solid black",
        duration: 0.2,
        textDecoration: "underline",
      });

      setTl(timeline);
    },
    { scope: container }
  );

  return (
    <div
      className="grid items-center w-screen min-h-screen pb-20 gap-16 sm:px-12"
      ref={container}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="flex min-h-[40vh] w-screen justify-center items-center  max-sm:flex-col">
          <div className="flex max-w-[1400px] w-full">
            <div className="flex w-1/2 h-[600px] justify-center items-center relative overfloe-hidden p-24 max-sm:hidden">
              <Image
                src="/test.jpg"
                alt="image"
                className="object-cover"
                width={800}
                height={800}
              />
            </div>
            <div className="flex jutify-center flex-col w-1/2 max-sm:w-full p-24 max-sm:p-12 max-sm:h-[80vh]">
              <h2 className="text-[120px] max-sm:text-[25vw] font-[800] leading-[130px] max-sm:leading-[27vw] mb-8">
                Hi, I'm <br />
                Tom<span id="header-underscore">_</span>
              </h2>

              <p className="font-semibold text-xl">
                {`["Full-Stack Developer", "Software Engineer"]`}
              </p>
            </div>
          </div>
        </section>

        <section className="flex w-screen justify-center items-center max-sm:flex-col">
          <div className="flex w-full flex-col items-center max-w-[1400px]">
            <button
              onMouseEnter={() => {
                if (tl) {
                  tl.play();
                }
              }}
              onMouseLeave={() => {
                if (tl) {
                  tl.reverse();
                }
              }}
              id="resume"
              className={`bg-black border-[1px] border-black text-white px-8 py-6 text-xl font-bold mb-12 ${
                theme === "dark" ? "invert" : ""
              }`}
            >
              My Resume
            </button>

            <div className="w-full flex gap-8 justify-center">
              <Git size={60} link="https://github.com/The-Orange-Dot" />
              <LinkedIn
                size={60}
                link="https://www.linkedin.com/in/tom-le-dev/"
              />
              <Gmail size={60} link="mailto:lethomas710@gmail.com" />
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
