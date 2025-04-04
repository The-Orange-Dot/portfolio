"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const HTML = ({ size = 100 }: { size?: number }) => {
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
      id="HTML"
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
          fill="#E44D26"
          d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
        />
        <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
        <path
          fill="#EBEBEB"
          d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
        />
        <path
          fill="#fff"
          d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
        />
      </svg>
      <span className="overflow-hidden">
        <p className="translate-y-[20px] text text-xs tracking-[1px] mt-1">
          HTML
        </p>
      </span>
    </div>
  );
};

export default HTML;
