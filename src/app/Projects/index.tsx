import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

const Projects = () => {
  const container = React.useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, TextPlugin);

      const projects = gsap.utils.toArray(".projects-text");
      const texts = ["&ltProjects /&gt", "my_work"];

      projects.forEach((intro, index) => {
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
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="projects"
      className="flex flex-col items-center mb-40"
    >
      <div className="w-full max-w-[1300px] min-h-[800px]">
        <span className="font-bold text-xl projects-text">{`.`}</span>
        <h2 className="text-[80px] font-black mb-12 projects-text">.</h2>

        <div className=""></div>
      </div>
    </section>
  );
};

export default Projects;
