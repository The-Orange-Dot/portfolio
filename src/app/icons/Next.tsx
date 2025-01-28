"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { SplitText } from "gsap/SplitText";

const Next = ({ size = 100 }: { size?: number }) => {
  const { theme } = useTheme();
  const container = React.useRef(null);
  const [tl, setTl] = React.useState<null | gsap.core.Timeline>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);
      const splitText = new SplitText(".text", { type: "chars" });

      const timeline = gsap
        .timeline({ paused: true, duration: 0.01 })
        .to(splitText.chars, { y: -20, stagger: 0.03 });
      setTl(timeline);
    },
    { scope: container }
  );

  return (
    <div className="flex flex-col items-center" ref={container}>
      <svg
        width={`${size}`}
        height={`${size}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        className={`${theme === "dark" ? "invert" : ""}`}
        onMouseEnter={() => {
          tl?.play();
        }}
        onMouseLeave={() => {
          tl?.reverse();
        }}
      >
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
      </svg>
      <span className="overflow-hidden">
        <p className="translate-y-[20px] text text-xs tracking-[1px] mt-1">
          Next.js
        </p>
      </span>
    </div>
  );
};

export default Next;
