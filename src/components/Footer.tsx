import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-base-300 py-10 ">
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2 text-xl font-bold">
        {/* Remplace par ton logo si tu veux */}
        <span>🧑‍💻</span>
        <a href="#">CABS<span className="text-accent">DEV</span></a>
      </div>
      <p className="text-xs text-base-content/60">
        Copyright © {new Date().getFullYear()} - Tous droits réservés
      </p>
      <div className="flex gap-4 mt-2">
        <a
          href="https://github.com/tonprofil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-base-content hover:text-accent transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/tonprofil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-base-content hover:text-accent transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/tonprofil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-base-content hover:text-accent transition-colors"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;