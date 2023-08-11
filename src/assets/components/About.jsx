import React from "react";

const About = () => {
  return (
    <div name="sobre mi" className="w-full h-screen bg-gradient-to-b dark:text-white dark:from-cyan-950">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Acerca de mi</p>
        </div>

        <p className="text-xl mt-20">
          Mi viaje en el mundo del desarrollo comenzó como un apasionado explorador de código y ha
          evolucionado en una emocionante travesía en el campo de la programación web.
        </p>

        <br />

        <p className="text-xl">
          ¡Juntos podemos llevar la experiencia digital al siguiente nivel! Si estás interesado en trabajar juntos o
          simplemente quieres discutir ideas, no dudes en ponerte en contacto conmigo!
        </p>
      </div>
    </div>
  );
};

export default About;
