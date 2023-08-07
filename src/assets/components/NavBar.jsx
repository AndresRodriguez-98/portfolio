import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    // el justify-between es un	justify-content: space-between (si tenes 3 elementos, 1 en el margen izq, otro al centro, y otro en el margen derecho)
    // el item-center es para alinear artículos a lo largo del centro del eje transversal del contenedor
    // el w-full le da un ancho del 100% (todo el ancho del contenedor)
    // fixed hace que el elemento siempre permanezca en el mismo lugar incluso si se desplaza la pag
    // con px hacemos paddings a la izquierda y a la derecha
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Andres</h1>
      </div>

      {/* como tailwind es movile first, primero siempre debe estar hidden el ul (por defecto)*/}
      {/* desp del hidden, hacemos que haya un flex en una consulta de medios (cuando pasamos el mouse*/}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      {/* con el onclick este le estamos dando capacidad de cambiar el estado cuando clickemos*/}
      {/* si estaba false cambia a true y viceversa*/}
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
