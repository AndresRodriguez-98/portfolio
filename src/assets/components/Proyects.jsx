import React from "react";

const Proyects = () => {
  const proyectos = [
    {
      id: 1,
    },
    {
      id: 2,
    }
  ];

  return (
    <div name="proyectos" className="bg-gradient-to-b from-black to-gray-600 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Proyectos</p>
          <p className="py-6"> Mirá algunos de mis trabajos:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {proyectos.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-400 rounded-lg">
              <p>Proyectos</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200">Demo</button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200">Código</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyects;
