import About from "./components/About";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Componente from "./components/Componente";
import Footer from "./components/Footer";
import Galeria from "./components/Galeria";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />
      <About />
      <Galeria />
      <Cards />
      <Componente />
      <Banner/>
      <Footer/>
    </main>
  );
}
