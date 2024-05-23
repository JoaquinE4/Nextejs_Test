"use client";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // Estado para manejar la visibilidad de la barra de navegación
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Función para alternar la visualización de la barra de navegación
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Array que contiene los elementos de navegación
  const navItems = [
    { id: 1, text: "Inicio" },
    { id: 2, text: "Acerca" },
    { id: 3, text: "Productos" },
    { id: 4, text: "Contacto" },
  ];

  return (
    <div
      className={`w-full transition-all flex   fixed z-10  duration-1000 ${
        scrolled
          ? " h-[4rem] sm:h-[4rem] md:h-[5rem] fixed z-20 top-0 bg-[#9186b8]  "
          : "h-[6rem] sm:h-[9rem] bg-[#ada2d300]"
      }`}
    >
      {/* Logo */}
      <h1 className="w-full content-center pl-5 sm:pl-10 justify-center text-3xl font-bold transition duration-500 delay-75 hover:text-[#d8d5f5] text-[#ffffff]">
        Solo Marcket.
      </h1>

      {/* Navegación de escritorio */}
      <ul className="hidden  z-10 md:flex gap-1 content-center justify-center">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4  text-[#ffffff] text-lg  content-center justify-center rounded-xl m-2 cursor-pointer transition hover:text-[#d8d5f5] duration-500 delay-75  "
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Icono de navegación móvil */}
      <div
        onClick={handleNav}
        className="block content-center justify-center pr-7 sm:pr-14  md:hidden"
      >
        {nav ? <AiOutlineClose size={30} color={"#fff"} /> : <AiOutlineMenu size={30} color={"#fff"} />}
      </div>

      {/* Menú de navegación móvil */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 z-10 top-0 w-[60%] h-full    bg-[#9186b8] ease-in-out duration-500"
            : "ease-in-out w-[60%] z-10 duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Logo móvil */}
        <h1 className="w-full text-3xl font-bold text-[#cac7eb] m-4">
          Solo Marcket.
        </h1>

        {/* Elementos de navegación móvil */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4  rounded-xl hover:bg-[#9186b8] duration-300 hover:text-black cursor-pointer  "
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
