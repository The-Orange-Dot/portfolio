"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Tailwind = ({ size = 100 }: { size?: number }) => {
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
      id="Tailwind"
      className="flex flex-col items-center invisible"
      ref={container}
    >
      <svg
        className="max-sm:scale-75"
        width={`${size}`}
        height={`${size}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        onMouseEnter={() => {
          tl?.play();
        }}
        onMouseLeave={() => {
          tl?.reverse();
        }}
      >
        <path
          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
          fill="#38bdf8"
        />
      </svg>
      <span className="overflow-hidden">
        <p className="translate-y-[20px] text text-xs tracking-[1px] mt-1">
          Tailwind
        </p>
      </span>
    </div>
  );
};

export default Tailwind;
