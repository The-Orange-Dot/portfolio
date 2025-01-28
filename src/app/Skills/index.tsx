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
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

const Skills = () => {
  const container = React.useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    const intros = gsap.utils.toArray(".skills-text");
    const texts = ["&ltSkills /&gt", "tech_stack"];

    intros.forEach((intro, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: intro as any,
            start: "bottom bottom",
          },
        })
        .to(intro as any, {
          text: texts[index],
          duration: 1,
        });
    });
  });

  return (
    <section
      id="skills"
      className="w-screen flex flex-col items-center"
      ref={container}
    >
      <div className="w-full max-w-[1300px] min-h-[800px]">
        <span className="font-bold text-xl skills-text">{`.`}</span>
        <h2 className="text-[80px] font-black mb-12 skills-text">.</h2>

        <h3 className="text-xl font-bold">{`["Languages"]`}</h3>
        <div className="flex gap-8 py-2">
          <Typescript size={70} />
          <Javascript size={70} />
          <HTML size={70} />
          <CSS size={70} />
        </div>

        <h3 className="text-xl font-bold mt-8">{`["Frameworks"]`}</h3>
        <div className="flex gap-8 py-2">
          <ReactIcon size={70} />
          <Next size={70} />
          <Node size={70} />
          <Tailwind size={70} />
          <Sass size={70} />
        </div>

        <h3 className="text-xl font-bold mt-8">{`["Tech"]`}</h3>
        <div className="flex gap-8 py-2">
          <Redux size={70} />
          <Docker size={70} />
          <Vercel size={70} />
          <Cloudflare size={70} />
        </div>

        <h3 className="text-xl font-bold mt-8">{`["Design"]`}</h3>
        <div className="flex gap-8 py-2">
          <Figma size={70} />
          <Photoshop size={70} />
          <Canva size={70} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
