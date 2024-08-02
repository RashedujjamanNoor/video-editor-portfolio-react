import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="px-2 my-8 flex flex-col sm:flex-row justify-between items-center grid-cols-2 sm:px-40 mt-24"
      >
        <div className="order-2 mt-4 sm:order-1 sm:w-1/2">
          <div>
            <h1 className="font-extrabold text-lg sm:text-4xl">
              Hello, I'm a{" "}
              <ReactTyped
                strings={["Professional", "Video Editor"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                className="text-cyan-500 drop-shadow-lg"
              />
            </h1>
            <p className="text-gray-700 font-semibold text-sm text-justify  sm:text-lg mt-3 md:w-4/5">
              As a professional video editor, I transform raw footage into
              polished, engaging stories. With expertise in cutting, arranging,
              and refining content, I enhance narratives through seamless
              transitions and precise audio integration. Collaborating with
              creative teams, I ensure each project aligns with its vision and
              captivates its audience.
            </p>
          </div>
          <div className="mt-7">
            <h1 className="underline font-extrabold text-gray-800 text-sm">
              Currently Working On
            </h1>
            <div className="flex gap-2 mt-1">
              <img
                src="../../public/images/home and software/Adobe Premiere Pro.png"
                alt=""
                className="w-7 h-7 md:cursor-pointer hover:scale-105 duration-100"
              />
              <img
                src="../../public/images/home and software/Adobe After Effects.png"
                alt=""
                className="w-7 h-7 md:cursor-pointer hover:scale-105 duration-100"
              />
              <img
                src="../../public/images/home and software/Adobe Audition.png"
                alt=""
                className="w-7 h-7 md:cursor-pointer hover:scale-105 duration-100"
              />
              <img
                src="../../public/images/home and software/davinci.svg"
                alt=""
                className="w-7 h-7 md:cursor-pointer hover:scale-105 duration-100 drop-shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="order-1 sm:order-2 sm:w-1/2 sm:ml-16">
          <img
            src="../../public/images/home and software/homelogo.png"
            alt=""
            className=" rounded-lg sm:w-[500px] h-[400px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
