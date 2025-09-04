"use client";
import React from "react";

const LiveVideo = () => {
  const [viewRabbits, setViewRabbits] = React.useState(false);

  const liveRabbitButton = (
    <button
      onClick={() => {
        setViewRabbits(!viewRabbits);
      }}
      className="px-8 py-4 reverse-bg-color font-bold hover:opacity-50 hover:duration-500 duration-500"
    >
      {viewRabbits ? "Close Stream" : "View Live Rabbit"}
    </button>
  );

  const foundationInfo = {
    text: "Southampton Animal Shelter Foundation",
    link: "https://southamptonanimalshelter.com/",
  };

  if (!viewRabbits) {
    return (
      <section
        id="live-video"
        className="unslected w-full flex flex-col items-center justify-center relative max-sm:px-4 max-sm:mb-0"
      >
        {liveRabbitButton}
      </section>
    );
  } else {
    return (
      <section
        id="live-video"
        className="selected w-screen
         flex flex-col items-center relative max-sm:px-4 mb-20 max-sm:mb-0"
      >
        <div className="w-full max-w-[1300px] lg:min-h-[800px] flex flex-col justify-center items-center">
          <div className="w-3/4 max-sm:w-full h-[600px] max-sm:h-[200px]">
            <iframe
              className="w-full h-full"
              src="http://100.78.108.14:8888/cam/"
            ></iframe>
          </div>

          <div className="my-4">
            <p>
              Fostered rabbits from the{" "}
              <a
                className="font-bold underline hover:opacity-50"
                target="_blank"
                rel="noopener noreferrer"
                href={foundationInfo.link}
              >
                {foundationInfo.text}
              </a>
              . Adoptions are available on their website.
            </p>
          </div>

          {liveRabbitButton}
        </div>
      </section>
    );
  }
};

export default LiveVideo;
