import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import VideoComponent from "./VideoComponent";

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
      className="w-full flex flex-col items-center relative max-sm:px-4 max-sm:min-h-[1200px]"
    >
      <div className="w-full max-w-[1300px] min-h-[800px]">
        <span className="font-bold text-xl projects-text">{`.`}</span>
        <h2 className="text-[80px] font-black mb-12 projects-text max-sm:text-[14vw]">
          .
        </h2>

        <div className="w-full min-h-[600px] grid grid-cols-2 max-sm:grid-cols-1">
          {[
            {
              title: "Tabistar",
              description:
                "A Next.js web application for finding restaurants, cafes, and events in the Hamptons, New York. Users can check dynamic menus and other information on restaurants, cafes, and other establishments.",
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
              title: "NegiNeko_Tokyo",
              description:
                "Custom-built app for remote connection to control overlay for IRL streamers. Streamers could assign moderaters to help manage and update overlays to through websockets, and changes would reflect in real-time.",
              scope: ["Design", "Front-end", "Back-end"],
              techStack: ["Next.js", "NGINX", "Node.js"],
              video: true,
              videoSrc: "/videos/negi-neko.mp4",
              imageSrc: "",
              link: "",
            },
            {
              title: "Moxie",
              description:
                "A market place that allows sellers to split up the price of items that they are selling. Buyers would purchase tickets and when all the tickets are bought, a seller is randomly chosen to win the item.",
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
            <VideoComponent project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
