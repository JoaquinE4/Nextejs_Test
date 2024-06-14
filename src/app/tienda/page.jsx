import ProdListContainer from "../components/prodListContainer";
import Header from "../components/Header";
import NavbarStatic from "../components/HeaderStatic";
import Footer from "../components/Footer";


export default function page() {
  return (
    <>
     
    <div className="flex  mb-24 flex-col w-full ">
            
              <NavbarStatic/>
          
              
            <div className="mt-[14rem] grid  w-full justify-a ">
            <ProdListContainer/>

            </div>
     </div>
     <Footer/>
    </>
  )
}
