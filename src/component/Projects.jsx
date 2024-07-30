import React from "react";

export const Projects = () => {
  return (
    <div className="px-2 my-8 sm:px-40">
      <h1 className="text-lg font-bold text-center text-gray-800 md:text-4xl border-b-2 ">
        Projects Category
      </h1>
      <div className="flex flex-col justify-center items-center md:grid grid-cols-4 gap-3 mt-4">
        <div className="border-solid border-2 border-l-indigo-100 rounded-lg p-4 w-80 shadow-lg hover:scale-105 duration-100 cursor-pointer md:w-96">
          <div className="flex justify-center items-center">
            <img
              src="../../public/images/projects/talking head.png"
              alt=""
              className="w-full object-cover rounded-lg"
            />
          </div>
          <h1 className="font-bold text-lg text-center my-1 text-gray-800 md:text-3xl">
            Talking Head Video
          </h1>
        </div>
        <div className="border-solid border-2 border-l-indigo-100 rounded-lg p-4 w-80 shadow-lg hover:scale-105 duration-100 cursor-pointer md:w-96">
          <div className="flex justify-center items-center">
            <img
              src="../../public/images/projects/talking head.png"
              alt=""
              className="w-full object-cover rounded-lg"
            />
          </div>
          <h1 className="font-bold text-lg text-center my-1 text-gray-800 md:text-3xl">
            Talking Head Video
          </h1>
        </div>
        <div className="border-solid border-2 border-l-indigo-100 rounded-lg p-4 w-80 shadow-lg hover:scale-105 duration-100 cursor-pointer md:w-96">
          <div className="flex justify-center items-center">
            <img
              src="../../public/images/projects/talking head.png"
              alt=""
              className="w-full object-cover rounded-lg"
            />
          </div>
          <h1 className="font-bold text-lg text-center my-1 text-gray-800 md:text-3xl">
            Talking Head Video
          </h1>
        </div>
        <div className="border-solid border-2 border-l-indigo-100 rounded-lg p-4 w-80 shadow-lg hover:scale-105 duration-100 cursor-pointer md:w-96">
          <div className="flex justify-center items-center">
            <img
              src="../../public/images/projects/talking head.png"
              alt=""
              className="w-full object-cover rounded-lg"
            />
          </div>
          <h1 className="font-bold text-lg text-center my-1 text-gray-800 md:text-3xl">
            Talking Head Video
          </h1>
        </div>
      </div>
    </div>
  );
};
