"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { SplitText } from "gsap/SplitText";

const Cloudflare = ({ size = 100 }: { size?: number }) => {
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
        onMouseEnter={() => {
          tl?.play();
        }}
        onMouseLeave={() => {
          tl?.reverse();
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
      >
        <path
          fill="#FFF"
          d="m115.679 69.288-15.591-8.94-2.689-1.163-63.781.436v32.381h82.061z"
        />
        <path
          fill="#F38020"
          d="M87.295 89.022c.763-2.617.472-5.015-.8-6.796-1.163-1.635-3.125-2.58-5.488-2.689l-44.737-.581c-.291 0-.545-.145-.691-.363s-.182-.509-.109-.8c.145-.436.581-.763 1.054-.8l45.137-.581c5.342-.254 11.157-4.579 13.192-9.885l2.58-6.723c.109-.291.145-.581.073-.872-2.906-13.158-14.644-22.97-28.672-22.97-12.938 0-23.913 8.359-27.838 19.952a13.35 13.35 0 0 0-9.267-2.58c-6.215.618-11.193 5.597-11.811 11.811-.145 1.599-.036 3.162.327 4.615C10.104 70.051 2 78.337 2 88.549c0 .909.073 1.817.182 2.726a.895.895 0 0 0 .872.763h82.57c.472 0 .909-.327 1.054-.8l.617-2.216z"
        />
        <path
          fill="#FAAE40"
          d="M101.542 60.275c-.4 0-.836 0-1.236.036-.291 0-.545.218-.654.509l-1.744 6.069c-.763 2.617-.472 5.015.8 6.796 1.163 1.635 3.125 2.58 5.488 2.689l9.522.581c.291 0 .545.145.691.363.145.218.182.545.109.8-.145.436-.581.763-1.054.8l-9.924.582c-5.379.254-11.157 4.579-13.192 9.885l-.727 1.853c-.145.363.109.727.509.727h34.089c.4 0 .763-.254.872-.654.581-2.108.909-4.325.909-6.614 0-13.447-10.975-24.422-24.458-24.422"
        />
      </svg>
      <span className="overflow-hidden">
        <p className="translate-y-[20px] text text-xs tracking-[1px] mt-1">
          Cloudflare
        </p>
      </span>
    </div>
  );
};

export default Cloudflare;
