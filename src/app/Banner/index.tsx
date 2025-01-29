"use client";
import React from "react";
import Contact from "../Contact";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import rabbits from "./rabbits.json";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(TextPlugin, ScrollToPlugin);

const Banner = () => {
  const container = React.useRef(null);
  const [imageText, setImageText] = React.useState<null | gsap.core.Timeline>(
    null
  );
  const [removeText, setRemoveText] = React.useState<null | gsap.core.Timeline>(
    null
  );
  const [imageInt, setImageInt] = React.useState(0);

  useGSAP(
    () => {
      const body = document.querySelector("body") as HTMLBodyElement;
      body.style.position = "fixed";

      const contactIcons = document.querySelectorAll(".contact-icon");

      const rand = Math.floor(Math.random() * 2); //Sets a random number between 0 or 1 to render one of the rabbits
      setImageInt(rand);
      const text = rabbits[rand].text;
      console.log(rand === 0 ? "Rendering Nacchan" : "Rendering Mocchan");

      gsap
        .timeline({})
        .to("#header-title", {
          text: `Hi, I'm Tom<span id="header-underscore">_</span>`,
          duration: 1,
          delay: 0.5,
          ease: "linear",
          onComplete: () => {
            body.style.position = "";
            const element = document.getElementById("header-underscore");

            //Animation for blinking underscore
            gsap
              .timeline({
                repeat: -1,
                yoyo: true,
              })
              .to(element, {
                opacity: 1,
                duration: 0,
              })
              .to(element, { duration: 0.5 })
              .to(element, { duration: 0, opacity: 0 })
              .to(element, { duration: 0.2 });
          },
        })
        .to("#header-image", {
          width: "50vw",
          delay: 2,
          duration: 1,
          ease: "power1.out",
        })
        .to(
          "#role-subtitle",
          {
            text: `["Full-Stack Developer", "Software Engineer"]`,
            duration: 1,
          },
          "<"
        )
        .to("#resume", { autoAlpha: 1 }, "<")
        .to(contactIcons, { autoAlpha: 1, stagger: 0.3 }, "<");

      const imageTimeline = gsap
        .timeline({
          paused: true,
          onComplete: () => {
            removeImageText.pause().progress(0);
          },
        })
        .to("#header-overlay", { autoAlpha: 1 })
        .to("#rabbit-text", {
          text: {
            value: `${text}`,
            preserveSpaces: true,
          },
          duration: 1,
          ease: "none",
        });

      const removeImageText = gsap
        .timeline({
          paused: true,
          onComplete: () => {
            imageTimeline.pause().progress(0);
          },
        })
        .to("#header-overlay", { autoAlpha: 0 });

      setImageText(imageTimeline);
      setRemoveText(removeImageText);
    },
    { scope: container }
  );

  return (
    <section
      className="flex min-h-[95vh] max-sm:min-h-[90vh] w-screen justify-center items-center max-sm:flex-col max-md:pt-12"
      ref={container}
    >
      <div className="flex max-w-[1400px] w-full">
        <div
          id="header-image-container"
          className="w-1/2 flex items-center max-sm:hidden"
        >
          <div
            id="header-image"
            className="flex w-0 max-w-[700px] h-[80vh] max-h-[600px] justify-center items-center relative"
          >
            <Image
              src={rabbits[imageInt].image}
              alt="image"
              className={`object-cover object-[${rabbits[imageInt].position}%]`}
              fill
              priority
              sizes="1000px"
              onMouseEnter={() => {
                removeText?.pause().progress(0);
                imageText?.play(0);
              }}
            />
            <div
              className="w-full h-full z-10 p-12 bg-[rgba(255,255,255,0.5)] invisible"
              id="header-overlay"
              onMouseLeave={() => {
                imageText?.pause().progress(0);
                removeText?.play(0);
              }}
            >
              <p id="rabbit-text" className="text-2xl text-black">{``}</p>
            </div>
          </div>
        </div>
        <div className="flex jutify-center flex-col w-1/2 max-sm:w-full p-24 max-sm:p-12 max-sm:h-[80vh]">
          <h2
            className="text-[120px] max-sm:text-[25vw] font-[800] leading-[130px] max-sm:leading-[27vw] mb-4"
            id="header-title"
          >
            <span id="header-underscore">_</span>
          </h2>

          <p
            className="font-semibold text-xl max-sm:text-xs max-sm:text-center mb-14"
            id="role-subtitle"
          >
            {``}
          </p>
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default Banner;
