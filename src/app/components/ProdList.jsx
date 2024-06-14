import Prod from "./Prod.jsx";

export default function ProdList({ prod }) {
  return (
    <div  className="grid gap-5 pl-6   sm:pl-[9rem] grid-cols-2 md:grid-cols-3 
     " >
    
    {prod.map((p, index) => (
      <Prod prod={p} key={index} />
    ))}
    </div>
   
  );
}
