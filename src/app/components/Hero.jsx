import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-slate-400 hero w-full  drop-shadow-2xl  sm:pl-[5.5rem]  content-center h-[42rem] lg:h-[42rem]">
      <h2
        className="optien.class  font-semibold text-[#cac7eb]  text-center sm:text-center sm:text-[4.2rem] text-[2.5rem] 
            transition  delay-100  duration-1000 hover:text-[#d5aef5]   

        "
      >
        Donde la tierra se <br />
        Transforma en belleza
      </h2>
    </div>
  );
}
