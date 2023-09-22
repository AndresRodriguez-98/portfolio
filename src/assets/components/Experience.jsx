import React from "react";
import html from "../images/html.png";
import css from "../components/CssImage.svg";
import docker from "../images/docker.png";
import github from "../images/github.png";
import JavaScript from "../images/JavaScript.png";
import mongodbImage from "../images/mongodb.png";
import nodejs from "../images/nodejs.png";
import pythonImage from "../images/python.png";
import tailwind from "../images/tailwind.png";
import reactImage from "../images/react.png";
import zustandImage from "../images/zustand.png";
import materialImage from "../images/materialUI.png";

const Experience = () => {
  const experiencies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
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
      src: materialImage,
      title: "Material UI",
      style: "shadow-sky-600",
    },
    {
      id: 7,
      src: zustandImage,
      title: "Zustand",
      style: "shadow-amber-950",
    },
    {
      id: 8,
      src: nodejs,
      title: "NodeJs",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: mongodbImage,
      title: "MongoDb",
      style: "shadow-green-600",
    },
    {
      id: 10,
      src: pythonImage,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 11,
      src: docker,
      title: "Docker",
      style: "shadow-sky-500",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
  ];

  return (
    <div
      name="experiencia"
      className="w-full md:h-screen text-blue-900 bg-gradient-to-b from-cyan-100 to-neutral-300 dark:text-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-44">
          <p className="text-4xl font-bold border-b-4 border-b-blue-900 dark:border-b-cyan-600 dark:text-cyan-600 p-2 inline">Experiencia</p>
          <p className="text-xl mt-20">Stack Actual:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiencies.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style} `}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-lg">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
