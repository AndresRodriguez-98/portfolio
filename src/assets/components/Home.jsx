import React from "react";
import HeroImage from "../heroImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="inicio" className="h-screen w-full bg-gradient-to-b from-black via-black to bg-gray-600">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">Desarrollador FullStack con React</h2>
          <p className="text-gray-500 py-4 max-w-md">
            ¡Hola! Soy Andrés, un apasionado desarrollador web de 25 años con un amor profundo por la tecnología y los
            videojuegos.
          </p>
          <Link to="proyectos" smooth duration={500} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to to-blue-500">
            Proyectos
            <span className="hover:rotate-90 duration-200">
              <MdKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
