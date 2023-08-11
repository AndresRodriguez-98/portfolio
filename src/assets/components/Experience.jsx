import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import docker from "../images/docker.png";
import github from "../images/github.png";
import JavaScript from "../images/JavaScript.png";
import mongodbImage from "../images/mongodb.png";
import nodejs from "../images/nodejs.png";
import pythonImage from "../images/python.png";
import tailwind from "../images/tailwind.png";
import reactImage from "../images/react.png";

const Experience = () => {
  const experiencies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "TailWind",
      style: "shadow-sky-600",
    },
    {
      id: 6,
      src: nodejs,
      title: "NodeJs",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: mongodbImage,
      title: "MongoDb",
      style: "shadow-green-600",
    },
    {
      id: 8,
      src: pythonImage,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 9,
      src: docker,
      title: "Docker",
      style: "shadow-sky-500",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
  ];

  return (
    <div name="experiencia" className="bg-gradient-to-b  w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experiencia</p>
          <p className="py-6">Estas son las tecnologias en las que trabajé</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiencies.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-125 duration-500 py-2 rounded-lg ${style} `}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
