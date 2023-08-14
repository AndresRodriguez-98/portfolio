import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../images/heroImage2.png"

const Home = () => {
  return (
    <div name="inicio" className="h-screen w-full bg-gradient-to-b from-neutral-300 to-cyan-100 dark:bg-gradient-to-b dark:from-black dark:to-gray-800 dark:text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-cyan-900 dark:text-blue-900">Desarrollador FullStack con React</h2>
          <p className="dark:text-white text-stone-950 py-4 max-w-md text-2xl">
            ¡Hola! Soy Andrés, tengo 25 años y un amor profundo por la tecnología
          </p>
          <Link to="proyectos" smooth duration={500} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to to-cyan-900">
            Proyectos
            <span className="hover:rotate-90 duration-200">
              <MdKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
        <div className="rounded-2xl mx-auto w-2/3 md:w-full">
          <img src={HeroImage} alt="my profile" className="inline border-b-8 border-b-cyan-900" width={1024} height={2048} decoding="async" loading="lazy" style={{color:"transparent"}}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
