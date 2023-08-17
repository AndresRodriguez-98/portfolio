import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../images/heroImage2.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/andresrodriguezabraham1998/",
      icon: <FaLinkedin />,
    },
    {
      id: 2,
      link: "https://github.com/AndresRodriguez-98",
      icon: <FaGithub />,
    },
    {
      id: 3,
      link: "https://drive.google.com/file/d/1jaANk2KGol9WF3eNPWu9krej-_cYY5td/view",
      icon: <BsFillPersonLinesFill />,
      download: true,
    },
  ];

  return (
    <div
      name="inicio"
      className="w-full h-screen bg-gradient-to-b from-neutral-300 via-neutral-300 to-cyan-100 dark:bg-gradient-to-b dark:from-black dark:via-black dark:to-gray-800 dark:text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          {/* TITULO */ }
          <h2 className="text-4xl mt-56 md:text-7xl font-bold text-blue-900 dark:text-cyan-600">
            Desarrollador FullStack con React
          </h2>
          {/* SUBTITULO */ }
          <p className="dark:text-white text-stone-950 py-4 max-w-md text-xl">
            ¡Hola! <span className="animate-pulse text-4xl">👋</span> Soy Andrés, tengo 25 años y un amor profundo por
            la tecnología
          </p>
          {/* BOTON PROYECTOS */ }
          <Link
            to="proyectos"
            smooth
            duration={500}
            className="group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-900 to-cyan-900 dark:from-cyan-500 dark:to-cyan-900"
          >
            Proyectos
            <span className="hover:rotate-90 duration-200">
              <MdKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>

          <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
            {SOCIAL.map(({ id, link, icon, download }) => (
              <a
                href={link}
                key={id}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer duration-300 hover:text-blue-800 text-black dark:hover:text-cyan-700 dark:text-white"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
