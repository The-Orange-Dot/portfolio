"use client";
import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

const About = () => {
  const container = React.useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, TextPlugin);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#self-portrait",
            start: "25% center",
            toggleActions: "play none none reverse",
          },
        })
        .to("#self-portrait", { x: "28vw", width: "100%", opacity: 0.15 });

      const intros = gsap.utils.toArray(".intro-text");
      const texts = ["&ltIntroduction /&gt", "about_me"];

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

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".intro-body-container",
            start: "10% bottom",
          },
        })
        .to(".body-text-1", {
          text: "Hi there! My name is Tom. I&apos;m a full-stack developer. I&apos;m passionate about bringing ideas to life through clean, efficient code and thoughtful design.",
          duration: 1,
          ease: "none",
        })
        .to(".body-text-2", {
          text: "My expertise lies in building dynamic, user-friendly applications using Next.js and React, and I love the challenge of turning concepts into fully functional digital experiences. From designing intuitive interfaces in Figma to crafting robust backends with Supabase and PostgreSQL databases, I thrive on every step of the development process. Whether it&apos;s deploying seamless solutions on platforms like Vercel, Netlify, Cloudflare, or Coolify, or diving into the nitty-gritty of front-end and back-end integration, I&apos;m always excited to tackle new challenges and create something meaningful",
          duration: 2,
          ease: "none",
        })
        .to(".body-text-3", {
          text: "When I’m not coding, you’ll often find me behind a camera, capturing moments and exploring the world through photography—a creative outlet that keeps me inspired and balanced.",
          duration: 1,
          ease: "none",
        })
        .to(".body-text-4", {
          text: "Let&apos;s build something amazing together!",
          duration: 0.7,
          ease: "none",
        });
    },
    { scope: container }
  );

  return (
    <section
      id="about"
      className="w-screen flex flex-col items-center relative"
      ref={container}
    >
      <Image
        className="absolute z-[-100] object-contain translate-x-[30vw] translate-y-[-10vh] opacity-0"
        src="/hung_le_self_portrait.jpg"
        alt="Self-portrait of Tom Le"
        id="self-portrait"
        fill
      />
      <div className="w-full  max-w-[1300px] min-h-[800px]">
        <p
          className="font-bold text-xl intro-text"
          id="intro-subtitle"
        >{`.`}</p>
        <h2 className="text-[80px] font-black mb-12 intro-text" id="about-me">
          .
        </h2>

        <div className="flex flex-col gap-8 intro-body-container">
          <p className="text-xl leading-[32px] body-text-1"></p>
          <p className="text-xl leading-[32px] body-text-2"></p>

          <p className="text-xl leading-[32px] body-text-3"></p>

          <p className="text-xl leading-[32px] body-text-4"></p>
        </div>
      </div>
    </section>
  );
};

export default About;
