import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <NavBar />
        <Hero/>
      </div>

      <About/>
      
    </div>
  );
}
