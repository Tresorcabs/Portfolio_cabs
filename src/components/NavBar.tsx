// Ceci est un composant fonctionnel qui affiche une barre de navigation

import { HandMetal, Sun, Moon, Menu } from "lucide-react";
import { useState, useEffect } from "react";

const NavBar = () => {
    // On détecte le thème initial (par défaut 'dark')
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    // Applique le thème au chargement et à chaque changement
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const [menuOpen, setMenuOpen] = useState(false);

    // Liste des liens de navigation
    const navLinks = [
        { label: "Accueil", href: "#hero" },
        { label: "À propos", href: "#about" },
        { label: "Mes Expériences", href: "#experiences" },
        { label: "Mes Projets", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <nav className="flex items-center justify-between p-4 relative z-50">
            {/* Logo */}
            <a href="#" className="flex items-center text-3xl font-bold md:text-xl">
                <HandMetal className="mr-2" />
                CABS<span className="text-accent">DEV</span>
            </a>

            {/* Menu desktop */}
            <ul className="hidden md:flex space-x-4">
                {navLinks.map(link => (
                    <li key={link.href}>
                        <a href={link.href} className="btn btn-small btn-ghost">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Bouton light/dark mode */}
            <button
                className="ml-4 btn btn-circle btn-ghost"
                aria-label="Changer le mode"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? (
                    <Sun className="text-base-content" />
                ) : (
                    <Moon className="text-base-content" />
                )}
            </button>

            {/* Menu mobile */}
            <div className="md:hidden">
                <button
                    className="btn btn-circle btn-ghost"
                    aria-label="Ouvrir le menu"
                    onClick={() => setMenuOpen(o => !o)}
                >
                    <Menu />
                </button>
                {menuOpen && (
                    <div className="absolute right-4 top-16 bg-base-100 rounded-xl shadow-lg p-4 flex flex-col gap-2 w-48 animate-fade-in">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="btn btn-ghost justify-start"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
