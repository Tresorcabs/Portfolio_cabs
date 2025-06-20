import About from "./components/About";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <NavBar />
        <Hero/>
      </div>

      <About/>
      <Experiences/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
