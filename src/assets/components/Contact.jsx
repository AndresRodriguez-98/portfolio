import React from "react";

const Contact = () => {
  return (
    <div name="contacto" className="w-full h-screen bg-gradient-to-b p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contactame</p>
          <p className="py-6">Completá el formulario para que hablemos!</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/ba73bbe8-1717-42d8-8c11-4f6a3a746bc8" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="nombre"
              placeholder="Ingresá tu nombre"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Ingresá tu mail"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea name="mensaje" placeholder="Ingresá tu mensaje" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
