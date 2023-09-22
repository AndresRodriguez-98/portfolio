import React from "react";

const About = () => {
  return (
    <div
      name="sobre mi"
      className="w-full h-screen text-blue-900 bg-gradient-to-b from-cyan-100 to-neutral-300 dark:text-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 dark:text-cyan-600 dark:border-b-cyan-600 border-b-blue-900 ">
            Acerca de mi
          </p>
        </div>

        <p className="text-xl mt-10">
          Aspiro a ingresar al mundo laboral del desarrollo web para expandir mi experiencia y adquirir nuevas
          habilidades. Soy una persona proactiva, autodidacta y con capacidad para resolver problemas.
        </p>

        <br />

        <p className="text-xl text-black dark:text-cyan-200">
          Dentro del desarrollo web, mi mayor experiencia como developer se encuentra en el área del frontend, con el
          uso de ReactJs o React Native y Tailwind CSS o Material UI.
        </p>

        <p className="text-xl mt-10">
          Mi hobby son los videojuegos y la música. Me gustan los e-sport y la competitividad en equipo. Soy una persona
          apasionada por lo que hago, amante de la programación y el mundo IT.
        </p>
      </div>
    </div>
  );
};

export default About;
