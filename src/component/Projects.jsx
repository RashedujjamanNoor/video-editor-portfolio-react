// import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Projects = () => {
  const data = [
    {
      id: 1,
      video: "https://www.youtube.com/embed/tV-_9N7UVpw?si=S_PbgILHt6YcTNcz",
      description:
        "As a professional video editor, I transform raw footage into polished, engaging stories. With expertise in cutting, arranging, and refining content, I enhance narratives through seamless transitions and precise audio integration.",
    },
    {
      id: 2,
      video: "https://www.youtube.com/embed/tV-_9N7UVpw?si=S_PbgILHt6YcTNcz",
      description:
        "As a professional video editor, I transform raw footage into polished, engaging stories. With expertise in cutting, arranging, and refining content, I enhance narratives through seamless transitions and precise audio integration.",
    },
    {
      id: 3,
      video: "https://www.youtube.com/embed/tV-_9N7UVpw?si=S_PbgILHt6YcTNcz",
      description:
        "As a professional video editor, I transform raw footage into polished, engaging stories. With expertise in cutting, arranging, and refining content, I enhance narratives through seamless transitions and precise audio integration.",
    },
    {
      id: 4,
      video: "https://www.youtube.com/embed/tV-_9N7UVpw?si=S_PbgILHt6YcTNcz",
      description:
        "As a professional video editor, I transform raw footage into polished, engaging stories. With expertise in cutting, arranging, and refining content, I enhance narratives through seamless transitions and precise audio integration.",
    },
    {
      id: 5,
      video: "https://www.youtube.com/embed/tV-_9N7UVpw?si=S_PbgILHt6YcTNcz",
      description:
        "As a professional video editor, I transform raw footage into polished, engaging stories. With expertise in cutting, arranging, and refining content, I enhance narratives through seamless transitions and precise audio integration.",
    },
    {
      id: 6,
      video: "https://www.youtube.com/embed/tV-_9N7UVpw?si=S_PbgILHt6YcTNcz",
      description:
        "As a professional video editor, I transform raw footage into polished, engaging stories. With expertise in cutting, arranging, and refining content, I enhance narratives through seamless transitions and precise audio integration.",
    },
    {
      id: 7,
      video: "https://www.youtube.com/embed/tV-_9N7UVpw?si=S_PbgILHt6YcTNcz",
      description:
        "As a professional video editor, I transform raw footage into polished, engaging stories. With expertise in cutting, arranging, and refining content, I enhance narratives through seamless transitions and precise audio integration.",
    },
    {
      id: 8,
      video: "https://www.youtube.com/embed/tV-_9N7UVpw?si=S_PbgILHt6YcTNcz",
      description:
        "As a professional video editor, I transform raw footage into polished, engaging stories. With expertise in cutting, arranging, and refining content, I enhance narratives through seamless transitions and precise audio integration.",
    },
    {
      id: 9,
      video: "https://www.youtube.com/embed/tV-_9N7UVpw?si=S_PbgILHt6YcTNcz",
      description:
        "As a professional video editor, I transform raw footage into polished, engaging stories. With expertise in cutting, arranging, and refining content, I enhance narratives through seamless transitions and precise audio integration.",
    },
    {
      id: 10,
      video: "https://www.youtube.com/embed/tV-_9N7UVpw?si=S_PbgILHt6YcTNcz",
      description:
        "As a professional video editor, I transform raw footage into polished, engaging stories. With expertise in cutting, arranging, and refining content, I enhance narratives through seamless transitions and precise audio integration.",
    },
  ];
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="m-8 md:mx-40">
        <div>
          <h1 className="font-bold text-lg text-slate-700 flex justify-center items-center border-b-2 md:text-4xl">
            Projects
          </h1>
        </div>

        <div className="">
          <div className=" md:mx-80">
            <Slider {...settings}>
              {data.map((curElem, index) => (
                <div
                  key={index}
                  className=" rounded-lg shadow-lg bg-slate-200 my-3 w-full m-auto md:h-[350px] md:w-[400px]"
                >
                  <div>
                    <iframe
                      src={curElem.video}
                      frameborder="0"
                      className="w-full h-full px-6 pt-3 md:h-[250px] md:w-[480px] md:m-auto"
                    ></iframe>
                  </div>
                  <div>
                    <p className="text-justify text-sm text-slate-800 px-6 py-3">
                      <span className="font-bold text-slate-800 underline">
                        Description:
                      </span>{" "}
                      {curElem.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
