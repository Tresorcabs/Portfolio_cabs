import SectionTitle from "./SectionTitle"
import MonImage from "../assets/img.jpg";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis un développeur frontend avec une bonne expérience.",
        icon: <LetterText className="scale-150 text-accent" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description:
        "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
        icon: <CalendarSync className="scale-150 text-accent" />,
    },
    {
        id: 3,
        title: "Passionné par l'UI/UX",
        description:
        "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
        icon: <Paintbrush className="scale-150 text-accent" />,
    },
];

const About = () => {
    return (
        <div className="p-10 mb-10 bg-base-300 md:mb32" id="about">
            <SectionTitle title="À propos" />

            <div className="flex items-center justify-center md:h-screen">
                
            <div className="hidden md:block">
                <img
                src={MonImage}
                alt="Mon image"
                className="object-cover w-96 rounded-xl"
                // style={{
                //     borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33% ", // Utiliser l'outil borderradiusgenerator su google
                // }}
                />
                </div>
                
            <div className="space-y-4 md:ml-4">
                    {aboutSections.map((section) => (
                        
                        <div key={section.id} className="flex flex-col items-center p-5 space-x-4 shadow-sl md:flex-row bg-base-100 rounded-xl md:w-96">
                            <div className="mb-2 md:mb-0">
                                {section.icon} 
                            </div>

                            <div className="text-center md:ml-4 md:text-left">
                                <h2 className="mb-1 text-xl font-bold">{section.title}</h2>
                                <p className="text-sm">{section.description}</p>
                            </div>
                                
                            </div>
                    ))}
            </div>
            </div>
        </div>
    );
}

export default About