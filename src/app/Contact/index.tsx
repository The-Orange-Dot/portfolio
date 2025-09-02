"use client";
import React from "react";
import Git from "../icons/Git";
import { useTheme } from "next-themes";
import LinkedIn from "../icons/LinkedIn";
import Gmail from "../icons/Gmail";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Contact = () => {
  const container = React.useRef(null);
  const [tl, setTl] = React.useState<null | gsap.core.Timeline>(null);
  const { theme } = useTheme();
  const [darkMode, setDarkMode] = React.useState(false);

  const resume = "/2025_Sept_Tom_Le_Resume.pdf";

  React.useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  useGSAP(
    () => {
      const timeline = gsap.timeline({ paused: true }).to("#resume", {
        borderRadius: 14,
        backgroundColor: "#fff",
        color: "#000",
        border: "1px solid black",
        duration: 0.2,
        textDecoration: "underline",
        text: {
          value: "Download",
          padSpace: true,
          preserveSpaces: true,
        },
      });

      setTl(timeline);
    },
    { scope: container }
  );

  return (
    <section
      className="flex w-full justify-center items-center max-sm:flex-col"
      ref={container}
    >
      <div className="flex w-full flex-col max-w-[1400px]">
        <a href={resume} download className="max-sm:flex max-sm:justify-center">
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
            className={`bg-black border-[1px] border-black text-white px-4 py-2 text-xl font-bold mb-6 w-40 invisible ${
              darkMode ? "invert" : ""
            }`}
          >
            My Resume
          </button>
        </a>

        <div className="w-full flex gap-8 max-sm:justify-center">
          <Git size={40} link="https://github.com/The-Orange-Dot" />
          <LinkedIn size={40} link="https://www.linkedin.com/in/tom-le-dev/" />
          <Gmail size={40} link="mailto:lethomas710@gmail.com" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
