 
import { FaTruckFast } from "react-icons/fa6";

export default function Componente() {
  return (
<section className="bg-[#e1dbf5b0] flex sm:justify-evenly p-4 gap-2  sm:p-8">
  <div className="flex flex-col">
    <h2 className="text-2xl flex gap-3 items-center font-bold mb-8">Envíos <FaTruckFast className="text-2xl"/>  </h2>
    
    <p className="mb-4 text-sm sm:text-base">Realizamos envíos a todo el país.</p>
    
  </div>
   <div className="  flex flex-col  justify-center">
   <h2 className="text-xl text-center font-bold mb-6">Formas de pago </h2>
    <ul className="  ml-6">
      
      <li className="mb-2 text-sm sm:text-base">Transferencias bancarias</li>
      <li className="mb-2 text-sm sm:text-base">Pago en efectivo</li>
    </ul>
   </div>
</section>

    
  )
}
