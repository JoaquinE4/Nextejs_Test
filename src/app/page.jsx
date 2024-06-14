import About from "./components/About";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Categorias from "./components/Categorias";
import Componente from "./components/Componente";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Galeria from "./components/Galeria";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
<div className="lg:px-5">

      <About />
      <Galeria />
      <Categorias/>
      <Cards />
      <Componente />
      <Contacto/>
</div>
      <Banner/>
      <Footer/>
    </main>
  );
}
