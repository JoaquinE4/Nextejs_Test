import Link from "next/link";

export default function Prod({ prod  }) {
     return (
 
           <div className="w-50 sm:w-60 flex bg-[#ffffffda] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={prod._id}>
            <Link href={`/tienda/producto/${prod._id}`}>
              <img
                src={prod.thumbnail}
                alt="Product"
                className="p-5  rounded-t-xl"
              />
              <p className="text-lg pl-6 font-bold text-black capitalize">{prod.title}</p>
              <div className="px-4 py-3 w-50">
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">ARS $ {prod.price}</p>
  
                  
                </div>
              </div>
            </Link>
          </div>
      
    )
  }
  