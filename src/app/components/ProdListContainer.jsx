'use client'
import { useEffect, useState } from "react"
import ProdList from "./ProdList.jsx";
import { useParams } from "next/navigation.js";

export default function ProdListContainer() {
    const [prod, setProd] = useState([])
    const { id } = useParams()


    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await fetch("/api/productos", { method: "GET" });
                if (!response.ok) {
                    throw new Error("Error al obtener los productos");
                }
                const data = await response.json(); 
                setProd(data);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };
        obtenerProductos();
    }, [id]);

    return (
         
            <div className=" content-center ">
              <ProdList prod={prod}/>
            </div>
        
    );
}
