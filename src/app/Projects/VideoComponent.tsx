import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoComponent = ({ project }: { project: any }) => {
  const component = React.useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".video",
            start: "40% bottom",
          },
        })
        .to(component.current, {
          opacity: 1,
        });
    },
    { scope: component }
  );

  return (
    <div
      className="w-full min-h-[300px] border-color border p-12 max-sm:p-10 flex flex-col justify-between opacity-0"
      ref={component}
    >
      <div className="flex flex-col gap-4 mb-8">
        <h3 className="text-2xl font-bold">{`<${project.title} />`}</h3>
        <p className="min-h-12">{project.description}</p>

        <p>{`Role:${project.scope.map((role: string[]) => ` ${role}`)}`}</p>
        <p>{`Tech-stack:${project.techStack.map(
          (tech: string[]) => ` ${tech}`
        )}`}</p>
      </div>
      {project.link ? (
        <a
          href={project.link ? project.link : "#"}
          className="relative w-full h-full video"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.link ? (
            <div
              className={`font-bold opacity-0 hover:opacity-100 bg-[rgba(0,0,0,0.5)] absolute left-0 top-0 w-full h-full z-10 flex justify-center items-center`}
            >
              <p className="text-white">Visit Site</p>
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
        <div className="relative w-full h-full video">
          {project.link ? (
            <div
              className={`font-bold ${
                project.link ? "cursor-pointer bg-[rgba(0,0,0,0)]" : ""
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
      )}
    </div>
  );
};

export default VideoComponent;
