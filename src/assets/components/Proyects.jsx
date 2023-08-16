import React from "react";
import p1 from "../images/tateti.png";
import p2 from "../images/Todo.png";
import p3 from "../images/reactsocial.png";
import p4 from "../images/pelis.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Proyects = () => {
  const proyectos = [
    {
      id: 1,
      image: p1,
      title: "Tic Tac Toe",
      github: "https://github.com/AndresRodriguez-98/Proyectos/tree/main/01-TicTacToe/01-tic-tac-toe",
      demo: "https.//nodejs.org/en/",
    },
    {
      id: 2,
      image: p2,
      title: "Todo App",
      github: "https://github.com/AndresRodriguez-98/Proyectos/tree/main/todo-app-ts",
      demo: "https.//nodejs.org/en/",
    },
    {
      id: 3,
      image: p3,
      title: "Red Social",
      github: "https://github.com/AndresRodriguez-98/udemy-red-social",
      demo: "https.//nodejs.org/en/",
    },
    {
      id: 4,
      image: p4,
      title: "Web de peliculas",
      github: "https://github.com/AndresRodriguez-98/udemy-red-social",
      demo: "https.//nodejs.org/en/",
    },
  ];

  return (
    <div
      name="proyectos"
      className="w-full md:h-screen bg-gradient-to-b from-neutral-300 to-cyan-100 text-blue-900 dark:bg-gradient-to-b dark:from-black dark:to-gray-800 dark:text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-b-blue-900 dark:border-b-cyan-600 dark:text-cyan-600">
            Proyectos
          </p>
          <p className="text-xl mt-20"> Mirá algunos de mis trabajos:</p>
        </div>

        <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
          {proyectos.map(({ id, image, title, github, demo }) => (
            <div key={id} className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden">
              <img src={image} alt={title} className="mx-auto w-3/4" />

              <div className="w-1/4 flex flex-col items-center justify-evenly p-3">
                <h2 className="text-2xl">{title}</h2>
                <a
                  className="text-2xl cursor-pointer duration-150 hover:scale-125"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="text-2xl cursor-pointer duration-150 hover:scale-125"
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyects;
