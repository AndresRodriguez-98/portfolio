import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import ReactSwitch from "react-switch";

const NavBar = ({ onThemeChange, checked }) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "inicio",
    },
    {
      id: 2,
      link: "sobre mi",
    },
    {
      id: 3,
      link: "proyectos",
    },
    {
      id: 4,
      link: "experiencia",
    },
    {
      id: 5,
      link: "contacto",
    },
  ];

  return (
    // el justify-between es un	justify-content: space-between (si tenes 3 elementos, 1 en el margen izq, otro al centro, y otro en el margen derecho)
    // el item-center es para alinear artículos a lo largo del centro del eje transversal del contenedor
    // el w-full le da un ancho del 100% (todo el ancho del contenedor)
    // fixed hace que el elemento siempre permanezca en el mismo lugar incluso si se desplaza la pag
  
    <div className="flex justify-between items-center w-full h-20 px-4 fixed dark:text-white dark:bg-black bg-neutral-300 text-blue-900">
      <div>
        <h1 className="text-3xl font-signature ml-2 text-cyan-600">Andrés</h1>
      </div>

      {/* como tailwind es mobile first, primero siempre debe estar hidden el ul (por defecto)*/}
      {/* desp del hidden, hacemos que haya un flex en una consulta de medios (cuando pasamos el mouse*/}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium hover:scale-125 duration-200 dark:text-gray-400 text-blue-900"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {/* BOTON DE MODO OSCURO */}
      <ReactSwitch
        offColor="#8796A5"
        onColor="#001e3c"
        offHandleColor="#fff"
        onHandleColor='#003892'
        onChange={onThemeChange}
        checked={checked}
        checkedIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 20,
            }}
          >
            🌙
          </div>
        }
        uncheckedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 20,
            }}
          >
            🔅
          </div>
        }
      />
    </div>
  );
};

export default NavBar;
