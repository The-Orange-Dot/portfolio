"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Vercel = ({ size = 100 }: { size?: number }) => {
  const { theme } = useTheme();
  const container = React.useRef(null);
  const [tl, setTl] = React.useState<null | gsap.core.Timeline>(null);

  useGSAP(
    () => {
      const splitText = new SplitText(".text", { type: "chars" });

      const timeline = gsap
        .timeline({ paused: true, duration: 0.01 })
        .to(splitText.chars, { y: -20, stagger: 0.03 });
      setTl(timeline);
    },
    { scope: container }
  );

  return (
    <div
      id="Vercel"
      className="flex flex-col items-center invisible"
      ref={container}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${size * 0.9}`}
        height={`${size * 0.9}`}
        viewBox="0 0 128 128"
        className={`${theme === "dark" ? "invert" : ""} max-sm:scale-75`}
        onMouseEnter={() => {
          tl?.play();
        }}
        onMouseLeave={() => {
          tl?.reverse();
        }}
      >
        <path className="fill-black" d="M63.984 17.184 127.964 128H0Zm0 0" />
      </svg>

      <span className="overflow-hidden">
        <p className="translate-y-[20px] text text-xs tracking-[1px] mt-1">
          Vercel
        </p>
      </span>
    </div>
  );
};

export default Vercel;
