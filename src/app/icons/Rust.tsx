"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Rust = ({ size = 100 }: { size?: number }) => {
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
      id="Rust"
      className="flex flex-col items-center invisible"
      ref={container}
    >
      <svg
        className="max-sm:scale-75"
        width={`${size + 10}`}
        height={`${size + 10}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        onMouseEnter={() => {
          tl?.play();
        }}
        onMouseLeave={() => {
          tl?.reverse();
        }}
      >
        <g id="logo" transform={`translate(${size - 5}, ${size - 10})`}>
          <path
            id="r"
            stroke="#000"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M-9-15H4c8 0 8 8 0 8H-9Zm-31 37H0V11h-9V3H1c11 0 5 19 14 19h25V3h-6v2c0 8-9 7-10 2s-5-9-6-9c15-8 6-24-6-24h-47v11h10v26h-15Z"
            transform="translate(.5 .5)"
          ></path>
          <g id="gear" mask="url(#holes)">
            <circle r="43" fill="none" stroke="#000" strokeWidth="9"></circle>
            <g id="cogs">
              <path
                id="cog"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="3"
                d="m46 3 5-3-5-3z"
              ></path>
              <use xlinkHref="#cog" transform="rotate(11.25)"></use>
              <use xlinkHref="#cog" transform="rotate(22.5)"></use>
              <use xlinkHref="#cog" transform="rotate(33.75)"></use>
              <use xlinkHref="#cog" transform="rotate(45)"></use>
              <use xlinkHref="#cog" transform="rotate(56.25)"></use>
              <use xlinkHref="#cog" transform="rotate(67.5)"></use>
              <use xlinkHref="#cog" transform="rotate(78.75)"></use>
              <use xlinkHref="#cog" transform="rotate(90)"></use>
              <use xlinkHref="#cog" transform="rotate(101.25)"></use>
              <use xlinkHref="#cog" transform="rotate(112.5)"></use>
              <use xlinkHref="#cog" transform="rotate(123.75)"></use>
              <use xlinkHref="#cog" transform="rotate(135)"></use>
              <use xlinkHref="#cog" transform="rotate(146.25)"></use>
              <use xlinkHref="#cog" transform="rotate(157.5)"></use>
              <use xlinkHref="#cog" transform="rotate(168.75)"></use>
              <use xlinkHref="#cog" transform="rotate(180)"></use>
              <use xlinkHref="#cog" transform="rotate(191.25)"></use>
              <use xlinkHref="#cog" transform="rotate(202.5)"></use>
              <use xlinkHref="#cog" transform="rotate(213.75)"></use>
              <use xlinkHref="#cog" transform="rotate(225)"></use>
              <use xlinkHref="#cog" transform="rotate(236.25)"></use>
              <use xlinkHref="#cog" transform="rotate(247.5)"></use>
              <use xlinkHref="#cog" transform="rotate(258.75)"></use>
              <use xlinkHref="#cog" transform="rotate(270)"></use>
              <use xlinkHref="#cog" transform="rotate(281.25)"></use>
              <use xlinkHref="#cog" transform="rotate(292.5)"></use>
              <use xlinkHref="#cog" transform="rotate(303.75)"></use>
              <use xlinkHref="#cog" transform="rotate(315)"></use>
              <use xlinkHref="#cog" transform="rotate(326.25)"></use>
              <use xlinkHref="#cog" transform="rotate(337.5)"></use>
              <use xlinkHref="#cog" transform="rotate(348.75)"></use>
            </g>
            <g id="mounts">
              <path
                id="mount"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="6"
                d="m-7-42 7 7 7-7z"
              ></path>
              <use xlinkHref="#mount" transform="rotate(72)"></use>
              <use xlinkHref="#mount" transform="rotate(144)"></use>
              <use xlinkHref="#mount" transform="rotate(216)"></use>
              <use xlinkHref="#mount" transform="rotate(288)"></use>
            </g>
          </g>
          <mask id="holes">
            <path fill="#fff" d="M-60-60H60V60H-60z"></path>
            <circle id="hole" cy="-40" r="3"></circle>
            <use xlinkHref="#hole" transform="rotate(72)"></use>
            <use xlinkHref="#hole" transform="rotate(144)"></use>
            <use xlinkHref="#hole" transform="rotate(216)"></use>
            <use xlinkHref="#hole" transform="rotate(288)"></use>
          </mask>
        </g>
      </svg>
      <span className="overflow-hidden">
        <p className="translate-y-[20px] text text-xs tracking-[1px] mt-1">
          Rust
        </p>
      </span>
    </div>
  );
};

export default Rust;
