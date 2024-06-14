"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import {} from 'react-icons'

export default function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await fetch("/api/productos", { method: "GET" });
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json(); // Extraer los datos del cuerpo de la respuesta
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    obtenerProductos();
  }, []);

  return (
    <div className="p-9 md:p-11">
      <h2 className="  text-purple-700  py-2  text-center text-4xl sm:text-5xl mb-11
          transition  delay-100  duration-1000 hover:text-[#d89ac9]
       font-semibold   capitalize ">Mas deseados</h2>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{ type: "fraction" }}
        autoplay={{ delay: 1750, disableOnInteraction: false }}
        breakpoints={{ 640: { slidesPerView: 2 }, 1000: { slidesPerView: 3 } }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className=""
      >
        {productos.map((producto, index) => (
          <SwiperSlide key={index} className="center">
            <div className="w-60 bg-[#ffffffda] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src={producto.thumbnail}
                  alt="Product"
                  className="h-min w-72 p-5 object-cover rounded-t-xl"
                />
                  <p className="text-lg font-bold text-black     capitalize">{producto.title}</p>
                
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
