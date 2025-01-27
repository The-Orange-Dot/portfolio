import React from "react";

const About = () => {
  return (
    <section className="w-screen flex flex-col items-center">
      <div className="w-full  max-w-[1400px] min-h-[800px]">
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
            Let&apos;s build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
