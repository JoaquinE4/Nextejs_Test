"use client";
import Footer from "@/app/components/Footer";
import NavbarStatic from "@/app/components/HeaderStatic";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams();
  const [prod, setProd] = useState(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const response = await fetch(`/api/productos/${params.id}`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Error al obtener el producto");
        }
        const data = await response.json();
        setProd(data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    if (params.id) {
      obtenerProducto();
    }
  }, [params.id]);

  if (!prod) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavbarStatic />

      <div className=" mt-[10rem]  container mx-auto border rounded-lg shadow-lg overflow-hidden">
        <div
          key={prod._id}
          className="flex flex-wrap   md:flex-nowrap  bg-white"
        >
          <div className="w-full md:w-5/12 flex items-center justify-center p-6 bg-gray-100">
            <img
              src={prod.thumbnail}
              className="img-fluid max-h-96"
              alt={prod.title}
            />
          </div>
          <div className="w-full md:w-7/12 lg:pl-[9rem] text-center md:text-left border-l md:border-l-0 p-6 flex flex-col items-center md:items-start justify-center">
            <div className="w-full  my-5">
              <h1 className="text-2xl md:text-3xl  font-bold mb-4 text-gray-800">
                {prod.title}
              </h1>
              <p className="text-lg my-10 text-gray-600 mb-4">{prod.description}</p>
              <div className="text-xl mt-10 font-semibold text-gray-800">
                ${prod.price}
              </div>
              <button
                type="submit"
                className="bg-[#9186b8] mt-10 text-white px-6 py-3 rounded-md hover:bg-[#7f6fb2] focus:outline-none focus:ring-2 focus:ring-[#9186b8] focus:ring-opacity-50"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
