 
'use client'
import { ProductManager } from "@/server/manager/products.manager";
 
  const prod=[
    {
      "title": "Frida Maceta",
      "description": "Descripción de Frida Maceta",
      "thumbnail": "https://i.ibb.co/NrGTYvp/F-2.png",
      "price": 4000,
      "categoria": "maceta",
      "stock": 5
    },
    {
      "title": "Frida Maceta",
      "description": "Descripción de Frida Maceta",
      "thumbnail": "https://i.ibb.co/VxCGWXb/F-3.png",
      "price": 4000,
      "categoria": "maceta",
      "stock": 5
    },
    {
      "title": "Frida Maceta",
      "description": "Descripción de Frida Maceta",
      "thumbnail": "https://i.ibb.co/8ggZRhQ/F-4.png",
      "price": 4000,
      "categoria": "maceta",
      "stock": 5
    },
    {
      "title": "Frida Maceta",
      "description": "Descripción de Frida Maceta",
      "thumbnail": "https://i.ibb.co/FDGmYMV/F-5.png",
      "price": 4000,
      "categoria": "maceta",
      "stock": 5
    },
    {
      "title": "Frida Maceta",
      "description": "Descripción de Frida Maceta",
      "thumbnail": "https://i.ibb.co/3c0CS57/F-6.png",
      "price": 4000,
      "categoria": "maceta",
      "stock": 5
    },
    {
      "title": "Gato cuatro patas",
      "description": "Descripción de Gato cuatro patas",
      "thumbnail": "https://i.ibb.co/SQ5DXc3/maceta-gato-4-patas-2.png",
      "price": 4000,
      "categoria": "maceta",
      "stock": 4
    },
    {
      "title": "Gato cuatro patas",
      "description": "Descripción de Gato cuatro patas",
      "thumbnail": "https://i.ibb.co/C7D88vv/maceta-gato-4-patas-1.png",
      "price": 4000,
      "categoria": "maceta",
      "stock": 4
    },
    {
      "title": "Gato",
      "description": "Descripción de Gato",
      "thumbnail": "https://i.ibb.co/LJLsT6G/macetita-gato-2.png",
      "price": 4000,
      "categoria": "maceta",
      "stock": 10
    },
    {
      "title": "Gato",
      "description": "Descripción de Gato",
      "thumbnail": "https://i.ibb.co/ygmj37Q/macetita-gato-1.png",
      "price": 4000,
      "categoria": "maceta",
      "stock": 10
    },
    {
      "title": "Gato",
      "description": "Descripción de Gato",
      "thumbnail": "https://i.ibb.co/TwGTqQP/IMG-20240124-WA0040-removebg-preview.png",
      "price": 4000,
      "categoria": "maceta",

      "stock": 10
    },
    {
      "title": "Gato Mate",
      "description": "Descripción de Gato Mate",
      "thumbnail": "https://i.ibb.co/d6T0D47/gato-mate-1.png",
      "price": 4000,
      "categoria": "Mate",
      "stock": 8
    },
    {
      "title": "Gato Mate",
      "description": "Descripción de Gato Mate",
      "thumbnail": "https://i.ibb.co/JvXQFQj/gato-mate-2.png",
      "price": 4000,
      "categoria": "Mate",
      "stock": 8
    },
    {
      "title": "Gato Mate",
      "description": "Descripción de Gato Mate",
      "thumbnail": "https://i.ibb.co/NCGtwz2/gato-mate-3.png",
      "price": 4000,
      "categoria": "Mate",
      "stock": 8
    },
    {
      "title": "Gato Mate",
      "description": "Descripción de Gato Mate",
      "thumbnail": "https://i.ibb.co/2nxwRV1/gato-mate-4.png",
      "price": 4000,
      "categoria": "Mate",
      "stock": 8
    },
    {
      "title": "Mate Ovo",
      "description": "Descripción de Mate Ovo",
      "thumbnail": "https://i.ibb.co/zNRf6Vw/IMG-20240124-WA0046-removebg-preview.png",
      "price": 4000,
      "categoria": "Mate",
      "stock": 12
    },
    {
      "title": "Mate Ovo",
      "description": "Descripción de Mate Ovo",
      "thumbnail": "https://i.ibb.co/0Vs73Hn/IMG-20240124-WA0047-removebg-preview.png",
      "price": 4000,
      "categoria": "Mate",
      "stock": 12
    },
    {
      "title": "Mate Ovo",
      "description": "Descripción de Mate Ovo",
      "thumbnail": "https://i.ibb.co/RGwLhxB/IMG-20240124-WA0048-removebg-preview.png",
      "price": 4000,
      "categoria": "Mate",
      "stock": 12
    },
    {
      "title": "Gorditas Voladoras",
      "description": "Descripción de Gorditas Voladoras",
      "thumbnail": "https://i.ibb.co/ctMdHZk/IMG-20240124-WA0041-removebg-preview.png",
      "price": 4000,
      "categoria": "maceta",
      "stock": 3
    },
    {
      "title": "Gorditas Voladoras",
      "description": "Descripción de Gorditas Voladoras",
      "thumbnail": "https://i.ibb.co/m9t1Ddm/IMG-20240124-WA0043-removebg-preview.png",
      "price": 4000,
      "categoria": "maceta",
      "stock": 3
    },
    {
      "title": "Gorditas Voladoras",
      "description": "Descripción de Gorditas Voladoras",
      "thumbnail": "https://i.ibb.co/1QCKJbF/IMG-20240124-WA0044-removebg-preview.png",
      "price": 4000,
      "categoria": "maceta",
      "stock": 3
    },
    {
      "title": "Acrobata",
      "description": "Descripción de Acrobata",
      "thumbnail": "https://i.ibb.co/YXNhkDY/IMG-20240124-WA0039-removebg-preview.png",
      "price": 4000,
      "categoria": "maceta",
      "stock": 4
    },
    {
      "title": "Tetera",
      "description": "Descripción de Tetera",
      "thumbnail": "https://i.ibb.co/M2LfD1R/IMG-20240124-WA0045-removebg-preview.png",
      "price": 4000,
      "stock": 1,
      "categoria": "tetera",

    }
  ]
  


  const cargarProductosEnBaseDeDatos = async () => {
    try {
      for (const producto of prod) {
        const response = await fetch("http://localhost:3001/api/productos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(producto)
        });
  
        if (!response.ok) {
          throw new Error(`Error al cargar el producto ${producto.title}`);
        }
  
        const data = await response.json();
        console.log(`Producto ${producto.title} cargado exitosamente:`, data);
      }
    } catch (error) {
      console.error("Error al cargar productos en la base de datos:", error);
    }
  };

export default function page() {

 
      
      
      return (
        <div>
          <div>
            <h3>Agrega Producto</h3>
            <button  >Agregar Productos</button>
          </div>
        </div>
      );
    }      