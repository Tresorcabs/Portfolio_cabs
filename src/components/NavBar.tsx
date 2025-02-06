// Ceci est un composant fonctionnel qui affiche une barre de navigation

import { HandMetal } from "lucide-react";

const NavBar = () => {
    return (
        <div className="flex items-center justify-center p-4 md:justify-between">
            <a href="#" className="flex items-center text-3xl font-bold md:text-xl">
            <HandMetal className="mr-2" />
            CABS<span className="text-accent">DEV</span>
            </a>

            <ul className="hidden space-x-4 md:flex">
                <li>
                    <a href="#" className="btn btn-small btn-ghost">
                    Accueil
                    </a>
                </li>

                <li>
                    <a href="#" className="btn btn-small btn-ghost">
                    À propos
                    </a>
                </li>

                <li>
                    <a href="#" className="btn btn-small btn-ghost">
                    Mes Expériences
                    </a>
                </li>

                <li>
                    <a href="#" className="btn btn-small btn-ghost">
                    Mes Projets
                    </a>
                </li>
            </ul>
        </div>
    );
    };

export default NavBar;
