"use client";
import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const container = React.useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#self-portrait",
            start: "25% center",
            toggleActions: "play none none reverse",
          },
        })
        .to("#self-portrait", { x: "28vw", width: "100%", opacity: 0.15 });
    },
    { scope: container }
  );

  return (
    <section
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
        <span className="font-bold text-xl">{`<Introduction />`}</span>
        <h2 className="text-[80px] font-black mb-12">about_me</h2>

        <div className="flex flex-col gap-8">
          <p className="text-xl leading-[32px]">
            Hi there! My name is Tom. I&apos;m a full-stack developer. I&apos;m
            passionate about bringing ideas to life through clean, efficient
            code and thoughtful design.
          </p>
          <p className="text-xl leading-[32px]">
            My expertise lies in building dynamic, user-friendly applications
            using Next.js and React, and I love the challenge of turning
            concepts into fully functional digital experiences. From designing
            intuitive interfaces in Figma to crafting robust backends with
            Supabase and PostgreSQL databases, I thrive on every step of the
            development process. Whether it&apos;s deploying seamless solutions
            on platforms like Vercel, Netlify, Cloudflare, or Coolify, or diving
            into the nitty-gritty of front-end and back-end integration,
            I&apos;m always excited to tackle new challenges and create
            something meaningful.
          </p>

          <p className="text-xl leading-[32px]">
            When I’m not coding, you’ll often find me behind a camera, capturing
            moments and exploring the world through photography—a creative
            outlet that keeps me inspired and balanced.
          </p>

          <p className="text-xl leading-[32px]">
            Let&apos;s build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
