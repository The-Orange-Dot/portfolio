"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useTheme } from "next-themes";

const NavBar = () => {
  const container = React.useRef(null);
  const { theme, setTheme } = useTheme();
  gsap.registerPlugin(SplitText);

  useGSAP(
    () => {
      const links = document.querySelectorAll(".link");

      const title = new SplitText("#title", { type: "chars" });

      gsap
        .timeline({ delay: 2 })
        .to("#navBody", { left: 0 })
        .to(title.chars, { y: -80, stagger: 0.1 })
        .to(links, { autoAlpha: 1, stagger: 0.2 }, ">0.3");

      // links.forEach((link) => {
      //   gsap.timeline({ paused: false }).to(link, { autoAlpha: 1 });
      // });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div
        className="w-screen h-20 fixed left-[-100vw] top-0 flex items-center border-b border-1 border-color z-10 navbar-bg"
        id="navBody"
      >
        <div className=" flex items-center justify-between sm:px-8 w-full overflow-hidden h-8">
          <h1 className="text-2xl font-bold translate-y-20" id="title">
            Tom Le
          </h1>

          <nav className="flex gap-8 font-semibold">
            <a href="#about" className="link invisible">
              About
            </a>
            <a href="#skills" className="link invisible">
              Skills
            </a>
            <a href="#projects" className="link invisible">
              Projects
            </a>
            <label className="inline-flex items-center cursor-pointer link invisible">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </span>
            </label>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
