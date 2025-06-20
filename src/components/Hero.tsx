import { Mail } from "lucide-react";
import MonImage from '../assets/img.jpg';

const Hero = () => {
    return (
      <div className="flex flex-col-reverse items-center justify-center my-10 md:my-32 md:flex-row" id="hero">
        
        <div className="flex flex-col">
          <h1 className="mt-4 text-5xl font-bold text-center md:text-6xl md:text-left md:mt-0">
            Bonjour, <br />
            je suis <span className="text-accent ">CABS</span>
          </h1>

          <p className="my-4 text-center text-md md:text-left">
            Je suis un développeur web et designer.{" "}
            <br />
            Avec 1 an d'experience utilisant React et tailwind.
            <br />
            Contactez-moi si vous avez besoin de mes services 😉.
          </p>

          <a href="#" className="btn btn-accent md:w-fit">
            <Mail className="w-5 h-5"/>
            Contactez-moi
          </a>
        </div>

        <div className="md:ml-40">
          <img src={MonImage} alt="Mon image" className="object-cover border-8 shadow-xl border-accent w-96 h-96"
            style={{
              borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33% "  // Utiliser l'outil borderradiusgenerator su google
          }}/>
        </div>
      </div>
    );
}

export default Hero