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
      className="w-full flex flex-col items-center mb-40"
    >
      <div className="w-full max-w-[1300px] min-h-[800px]">
        <span className="font-bold text-xl projects-text">{`.`}</span>
        <h2 className="text-[80px] font-black mb-12 projects-text">.</h2>

        <div className="w-full min-h-[600px] grid grid-cols-2">
          {[
            {
              title: "Tabistar",
              description:
                "A Next.js web application for finding restaurants, cafes, and events in the Hamptons, New York. ",
              scope: ["Front-end", "Back-end", "DevOps", "System-admin", "SEO"],
              techStack: [
                "Next.js",
                "Supabase",
                "Vercel",
                "Node",
                "Redux",
                "Sass",
              ],
              video: true,
              videoSrc: "/videos/tabistar.webm",
              imageSrc: "",
              link: "https://tabistar.com",
            },
            {
              title: "NegiNekoTokyo",
              description:
                "Custom-built app for remote connection to control overlay for IRL streamers",
              scope: ["Design", "Front-end", "Back-end"],
              techStack: ["Wordpress", "Elementor"],
              video: true,
              videoSrc: "/videos/negi-neko.mp4",
              imageSrc: "",
              link: "",
            },
            {
              title: "Moxie",
              description:
                "An auction app that allows sellers to split the pricing ",
              scope: ["Design", "Front-end", "Back-end"],
              techStack: ["Wordpress", "Elementor"],
              video: true,
              videoSrc: "/videos/moxie-preview.mp4",
              imageSrc: "",
              link: "",
            },
            {
              title: "Windward_CM",
              description:
                "A static website built with Next.js with custom built GSAP animations",
              scope: ["Front-end", "Back-end", "DevOps", "System-admin", "SEO"],
              techStack: ["Next.js", "Supabase", "Vercel", "Node", "GSAP"],
              video: true,
              videoSrc: "/videos/windward.webm",
              imageSrc: "",
              link: "https://windwardcm.com",
            },
            {
              title: "The American Hotel",
              description: "Redesign a Wordpress Website",
              scope: ["Design", "Front-end", "SEO"],
              techStack: ["Wordpress", "Elementor"],
              video: true,
              videoSrc: "/videos/theamericanhotel.webm",
              imageSrc: "",
              link: "https://theamericanhotel.com",
            },
            {
              title: "Samantha Rothberg Fitness",
              description:
                "Custom build wordpress website with custom GSAP animations",
              scope: ["Design", "Front-end", "SEO"],
              techStack: ["Wordpress", "Elementor", "GSAP"],
              video: true,
              videoSrc: "/videos/samrothbergfitness.webm",
              imageSrc: "",
              link: "https://samrothbergfitness.com",
            },
            {
              title: "The Hampton Maid/R.AIRE",
              description:
                "Custom design/build of a landing page for R.AIRE on Wix",
              scope: ["Design", "Front-end", "SEO"],
              techStack: ["Wix"],
              video: true,
              videoSrc: "/videos/hamptonmaid.webm",
              imageSrc: "",
              link: "https://hamptonmaid.com",
            },
            {
              title: "Cruz Brothers Construction",
              description:
                "Custom build wordpress website with custom GSAP animations",
              scope: ["Design", "Front-end", "SEO"],
              techStack: ["Wordpress"],
              video: true,
              videoSrc: "/videos/cruzbrothers.webm",
              imageSrc: "",
              link: "https://cruzbrothersconstruction.com",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="w-full min-h-[300px] border-color border p-12 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-4 mb-8">
                <h3 className="text-2xl font-bold">{`<${project.title} />`}</h3>
                <p className="min-h-12">{project.description}</p>

                <p>{`Role:${project.scope.map((role) => ` ${role}`)}`}</p>
                <p>{`Tech-stack:${project.techStack.map(
                  (tech) => ` ${tech}`
                )}`}</p>
              </div>
              {project.video ? (
                project.link ? (
                  <a
                    href={project.link ? project.link : "#"}
                    className="relative w-full h-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link ? (
                      <div
                        className={`font-bold ${
                          project.link
                            ? "cursor-pointer bg-[rgba(0,0,0,0)]"
                            : ""
                        } opacity-0 hover:opacity-100 absolute left-0 top-0 w-full h-full z-10 flex justify-center items-center`}
                      >
                        Visit Site
                      </div>
                    ) : null}
                    <video
                      autoPlay
                      playsInline
                      muted
                      loop
                      className="z-[-1] w-full h-full"
                    >
                      <source src={project.videoSrc} type="video/webm" />
                      <source src={project.videoSrc} type="video/mp4" />
                    </video>
                  </a>
                ) : (
                  <div className="relative w-full h-full">
                    {project.link ? (
                      <div
                        className={`font-bold ${
                          project.link
                            ? "cursor-pointer bg-[rgba(0,0,0,0)]"
                            : ""
                        } opacity-0 hover:opacity-100 absolute left-0 top-0 w-full h-full z-10 flex justify-center items-center`}
                      >
                        Visit Site
                      </div>
                    ) : null}
                    <video
                      autoPlay
                      playsInline
                      muted
                      loop
                      className="z-[-1] w-full h-full"
                    >
                      <source src={project.videoSrc} type="video/webm" />
                      <source src={project.videoSrc} type="video/mp4" />
                    </video>
                  </div>
                )
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
