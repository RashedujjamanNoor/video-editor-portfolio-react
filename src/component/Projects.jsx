import React from "react";

export const Projects = () => {
  return (
    <div className="px-2 my-8 sm:px-40">
      <h1 className="text-lg font-bold text-center text-gray-800 md:text-4xl border-b-2 ">
        Projects Category
      </h1>
      <div className="flex flex-col justify-between items-center md:grid md:grid-cols-2 place-items-center gap-6 mt-4">
        <div className="border-solid border-2 border-l-indigo-100 rounded-lg p-4 w-11/12 shadow-lg hover:scale-105 duration-100 cursor-pointer  md:w-full  md:flex justify-between items-center gap-3">
          <div className="flex justify-center items-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tV-_9N7UVpw?si=S_PbgILHt6YcTNcz"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h1 className="font-bold text-lg  my-1 text-gray-800 ">
              Client: Any Adams
            </h1>
            <p className="text-justify">
              <span className="font-bold">Description:</span> Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Dolores, enim eveniet?
              Aliquam minus eum iste id quod qui iusto, totam
            </p>
          </div>
        </div>
        <div className="border-solid border-2 border-l-indigo-100 rounded-lg p-4 w-11/12 shadow-lg hover:scale-105 duration-100 cursor-pointer  md:w-full  md:flex justify-between items-center gap-3">
          <div className="flex justify-center items-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tV-_9N7UVpw?si=S_PbgILHt6YcTNcz"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h1 className="font-bold text-lg  my-1 text-gray-800 ">
              Client: Marshal
            </h1>
            <p className="text-justify">
              <span className="font-bold">Description:</span> Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Dolores, enim eveniet?
              Aliquam minus eum iste id quod qui iusto, totam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
