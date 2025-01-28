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

const Skills = () => {
  return (
    <section className="w-screen flex flex-col items-center">
      <div className="w-full  max-w-[1300px] min-h-[800px]">
        <span className="font-bold text-xl">{`<Skills />`}</span>
        <h2 className="text-[80px] font-black mb-12">tech_stack</h2>

        <h3 className="text-xl font-bold">{`["Languages"]`}</h3>
        <div className="flex gap-8 py-8">
          <Typescript size={70} />
          <Javascript size={70} />
          <HTML size={70} />
          <CSS size={70} />
        </div>

        <h3 className="text-xl font-bold mt-8">{`["Frameworks"]`}</h3>
        <div className="flex gap-8 py-8">
          <ReactIcon size={70} />
          <Next size={70} />
          <Tailwind size={70} />
        </div>

        <h3 className="text-xl font-bold mt-8">{`["Tech"]`}</h3>
        <div className="flex gap-8 py-8">
          <Redux size={70} />
          <Docker size={70} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
