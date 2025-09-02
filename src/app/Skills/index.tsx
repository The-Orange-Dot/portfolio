"use client";
import React from "react";
import Typescript from "../icons/Typescript";
import Javascript from "../icons/Javascript";
import ReactIcon from "../icons/React";
import Next from "../icons/Next";
import Redux from "../icons/Redux";
import HTML from "../icons/Html";
import CSS from "../icons/CSS";
import Tailwind from "../icons/Tailwind";
import Docker from "../icons/Docker";
import Figma from "../icons/Figma";
import Node from "../icons/Node";
import Sass from "../icons/Sass";
import Vercel from "../icons/Vercel";
import Cloudflare from "../icons/Cloudflare";
import Photoshop from "../icons/Photoshop";
import Canva from "../icons/Canva";
import Rust from "../icons/Rust";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import PostgreSQL from "../icons/PostgreSQL";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Skills = () => {
  const container = React.useRef(null);

  useGSAP(
    () => {
      const intros = gsap.utils.toArray(".skills-text");
      const texts = ["&ltSkills /&gt", "tech_stack"];

      intros.forEach((intro, index) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: intro as gsap.DOMTarget,
              start: "bottom bottom",
            },
          })
          .to(intro as gsap.DOMTarget, {
            text: texts[index],
            duration: 1,
          });
      });

      const languageIcons = [
        "#Typescript",
        "#Javascript",
        "#Rust",
        "#HTML",
        "#CSS",
      ];
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `#languages`,
            start: "bottom bottom",
          },
        })
        .to("#languages", {
          text: `["Languages"]`,
        })
        .fromTo(languageIcons, { y: 5 }, { y: 0, autoAlpha: 1, stagger: 0.2 });

      const frameworkIcons = ["#React", "#Next", "#Node", "#Tailwind", "#Sass"];
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `#frameworks`,
            start: "bottom bottom",
          },
        })
        .to("#frameworks", {
          text: `["Frameworks"]`,
        })
        .fromTo(frameworkIcons, { y: 5 }, { y: 0, autoAlpha: 1, stagger: 0.2 });

      const techIcons = [
        "#Redux",
        "#Docker",
        "#Vercel",
        "#Cloudflare",
        "#PostgreSQL",
      ];
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `#tech`,
            start: "bottom bottom",
          },
        })
        .to("#tech", {
          text: `["Tech"]`,
        })
        .fromTo(techIcons, { y: 5 }, { y: 0, autoAlpha: 1, stagger: 0.2 });

      const designIcons = ["#Figma", "#Photoshop", "#Canva"];
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `#design`,
            start: "bottom bottom",
          },
        })
        .to("#design", {
          text: `["Design"]`,
        })
        .fromTo(designIcons, { y: 5 }, { y: 0, autoAlpha: 1, stagger: 0.2 });
    },
    { scope: container }
  );

  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center relative max-sm:px-4 mb-40 max-sm:mb-0"
      ref={container}
    >
      <div className="w-full max-w-[1300px] min-h-[800px]">
        <span className="font-bold text-xl skills-text max-sm:text-base">{`.`}</span>
        <h2 className="text-[80px] font-black mb-12 skills-text max-sm:text-[14vw]">
          .
        </h2>

        <h3
          className="text-xl font-bold max-sm:text-base"
          id="languages"
        >{`.`}</h3>
        <div className="flex gap-8 py-2 max-sm:gap-0">
          <Typescript size={70} />
          <Javascript size={70} />
          <Rust size={70} />
          <HTML size={70} />
          <CSS size={70} />
        </div>

        <h3
          className="text-xl font-bold mt-8 max-sm:mt-4 max-sm:text-base"
          id="frameworks"
        >{`.`}</h3>
        <div className="flex gap-8 py-2 max-sm:gap-0">
          <ReactIcon size={70} />
          <Next size={70} />
          <Node size={70} />
          <Tailwind size={70} />
          <Sass size={70} />
        </div>

        <h3
          className="text-xl font-bold mt-8 max-sm:mt-4 max-sm:text-base"
          id="tech"
        >{`.`}</h3>
        <div className="flex gap-8 py-2 max-sm:gap-0">
          <Redux size={70} />
          <Docker size={70} />
          <Vercel size={70} />
          <Cloudflare size={70} />
          <PostgreSQL size={70} />
        </div>

        <h3
          className="text-xl font-bold mt-8 max-sm:mt-4 max-sm:text-base"
          id="design"
        >{`.`}</h3>
        <div className="flex gap-8 py-2 max-sm:gap-0">
          <Figma size={70} />
          <Photoshop size={70} />
          <Canva size={70} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
