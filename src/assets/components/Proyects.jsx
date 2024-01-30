import React from "react";
import p1 from "../images/tateti.png";
import p2 from "../images/todoapp.png";
import p3 from "../images/redsocial.png";
import p4 from "../images/peliculas.png";
import p5 from "../images/quizz.png";
import p6 from "../images/donremolo.png"
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Proyects = () => {
  const proyectos = [
    {
      id: 1,
      image: p6,
      title: "Don Remolo",
      github: "https://github.com/adanj27/IdeasFactory-PizzeriaDonRemolo",
      demo: "https://ideas-factory-pizzeria-don-remolo.vercel.app/",
    },
    {
      id: 1,
      image: p5,
      title: "Quizz JS",
      github: "https://github.com/AndresRodriguez-98/quizz-javascript/",
      demo: "https://andresrodriguez-98.github.io/TicTacToe/",
    },
    {
      id: 2,
      image: p1,
      title: "Tic Tac Toe",
      github: "https://github.com/AndresRodriguez-98/TicTacToe",
      demo: "https://andresrodriguez-98.github.io/TicTacToe/",
    },
    {
      id: 3,
      image: p2,
      title: "Todo App",
      github: "https://github.com/AndresRodriguez-98/Todo-app",
      demo: "https://andresrodriguez-98.github.io/Todo-app/",
    },
    {
      id: 4,
      image: p3,
      title: "Red Social",
      github: "https://github.com/AndresRodriguez-98/udemy-red-social",
      demo: "https://github.com/AndresRodriguez-98/udemy-red-social",
    },
    {
      id: 5,
      image: p4,
      title: "Web de peliculas",
      github: "https://github.com/AndresRodriguez-98/proyecto-01-udemy-mern",
      demo: "https://andresrodriguez-98.github.io/proyecto-01-udemy-mern/",
    },
  ];

  return (
    <div
      name="proyectos"
      className="w-full mb-48 md:h-screen bg-gradient-to-b from-neutral-300 to-cyan-100 text-blue-900 dark:bg-gradient-to-b dark:from-black dark:to-gray-800 dark:text-white"
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
            <div key={id} className="max-w-lg flex shadow-lg shadow-cyan-600 rounded-2xl overflow-hidden">
              <img src={image} alt={title} className="mx-auto w-3/4" />
              <div className="w-1/3 flex flex-col items-center justify-evenly p-3">
                <h2>{title}</h2>
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
