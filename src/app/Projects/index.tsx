"use client";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import VideoComponent from "./VideoComponent";
import projects from "./projects.json";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Projects = () => {
  const container = React.useRef(null);

  useGSAP(
    () => {
      const projects = gsap.utils.toArray(".projects-text");
      const texts = ["&ltProjects /&gt", "my_work"];

      projects.forEach((intro, index) => {
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
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="projects"
      className="w-full flex flex-col items-center relative max-sm:px-4 max-sm:min-h-[1200px]"
    >
      <div className="w-full max-w-[1300px] min-h-[800px]">
        <span className="font-bold text-xl projects-text">{`.`}</span>
        <h2 className="text-[80px] font-black mb-12 projects-text max-sm:text-[14vw]">
          .
        </h2>

        <div className="w-full min-h-[600px] grid grid-cols-2 max-sm:grid-cols-1">
          {projects.map((project) => (
            <VideoComponent project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
