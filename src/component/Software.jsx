import React from "react";

export const Software = () => {
  return (
    <div name="Software" className="px-2 my-8  sm:px-40 sm:my-14">
      <h1 className="text-lg font-bold text-center text-gray-800 md:text-4xl border-b-2">
        Software
      </h1>

      <div className="grid grid-cols-2 justify-center items-center gap-3 mt-4 md:flex">
        <div className="flex justify-center items-center rounded-full px-4 py-2  text-white bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:scale-105 duration-100">
          <img
            src="../../public/images/home and software/Adobe Premiere Pro.png"
            alt=""
            className="w-4 m-1 md:w-6"
          />
          <span className="font-bold text-lg md:text-2xl">Premier Pro</span>
        </div>
        <div className="flex justify-center items-center rounded-full px-4 py-2  text-white bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:scale-105 duration-100">
          <img
            src="../../public/images/home and software/Adobe After Effects.png"
            alt=""
            className="w-4 m-1 md:w-6"
          />
          <span className="font-bold text-lg md:text-2xl">After Effects</span>
        </div>
        <div className="flex justify-center items-center rounded-full px-4 py-2  text-white bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:scale-105 duration-100">
          <img
            src="../../public/images/home and software/Adobe Audition.png"
            alt=""
            className="w-4 m-1 md:w-6"
          />
          <span className="font-bold text-lg md:text-2xl">Audition</span>
        </div>
        <div className="flex justify-center items-center rounded-full px-3 py-2  text-white bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:scale-105 duration-100 md:px-4">
          <img
            src="../../public/images/home and software/davinci.svg"
            alt=""
            className="w-4 m-1 md:w-6"
          />
          <span className="font-bold text-lg md:text-2xl">Davinci Resolve</span>
        </div>
        <div className="flex justify-center items-center rounded-full px-3 py-2  text-white bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:scale-105 duration-100 md:px-4">
          <img
            src="../../public/images/home and software/filmora.png"
            alt=""
            className="w-4 m-1 md:w-6"
          />
          <span className="font-bold text-lg md:text-2xl">Filmora</span>
        </div>
        <div className="flex justify-center items-center rounded-full px-3 py-2  text-white bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:scale-105 duration-100 md:px-4">
          <img
            src="../../public/images/home and software/capcut.svg"
            alt=""
            className="w-4 m-1 md:w-6"
          />
          <span className="font-bold text-lg md:text-2xl">Capcut</span>
        </div>
      </div>
    </div>
  );
};
