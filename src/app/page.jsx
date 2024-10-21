"use client";

// import img/svg
import Image from "next/image";
import SCROLL from "../app/assets/svg/scroll.svg";
import MENU from "../app/assets/svg/menu.svg";
import CROSS from "../app/assets/svg/cross.svg";

// import components
import BgParticle from "../app/components/BgParticle";
import Projet from "../app/components/Projet";
import Formation from "../app/components/Formation";
import Cv from "../app/components/Cv";
import Contact from "../app/components/Contact";

// import react
import { useState } from "react";

export default function Home() {
  // menu burger
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = (event, id) => {
    // Empeche le comportement du lien "#"
    event.preventDefault();
    // Recupere l'element ciblé (id)
    const element = document.getElementById(id);
    // fait défiler la page vers l'element
    if (element) {
      element.scrollIntoView({ behavior: "auto" });
    }
    closeMenu();
  };

  return (
    <main className="container-page">
      <BgParticle />
      <header>
        <nav>
          <a id="openBtn" onClick={toggleMenu}>
            <span className="burger-icon">
              <Image className="menu-svg" src={MENU} alt="menuSvg" />
            </span>
          </a>
          <h1>
            <a href="#top-page" onClick={(e) => handleScroll(e, "top-page")}>
              AURÉLIEN CHETOT
            </a>
          </h1>
          <div className={menuOpen ? "sidenav active" : "sidenav"}>
            <a className="close" onClick={toggleMenu}>
              <span className="cursor-menu-close">
                <Image src={CROSS} alt="cross" />
              </span>
            </a>
            <ul>
              <li>
                <a
                  href="#presentation"
                  onClick={(e) => handleScroll(e, "presentation")}
                >
                  Accueil
                </a>
              </li>
              <li>
                <a href="#projet" onClick={(e) => handleScroll(e, "projet")}>
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#formation"
                  onClick={(e) => handleScroll(e, "formation")}
                >
                  Formation
                </a>
              </li>
              <li>
                <a href="#cv" onClick={(e) => handleScroll(e, "cv")}>
                  Cv
                </a>
              </li>
              <li>
                {" "}
                <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section id="top-page" className="section-home">
        <h2 className="animate-title">
          <span className="line">Bienvenue sur mon</span>
          <span className="line1">Portfolio</span>
        </h2>
        <p>
          Développeur web en pleine évolution, je suis à la recherche d’une
          collaboration ou d’une alternance pour mettre en pratique mes
          compétences. Après ma formation à la Wild Code School, toujours
          curieux d&apos;apprendre et de relever de nouveaux défis. <br />
          N’hésitez pas à me contacter !
        </p>
        <div className="svg-scroll-container">
          <Image src={SCROLL} alt="Scroll down" width={100} height={100} />
        </div>
      </section>
      <section id="presentation" className="section-presentation">
        <h2>Bonjour :)</h2>
        <p>
          Ancien mécanicien, j'ai choisi de me réorienter vers le développement
          web pour relever de nouveaux défis. Titulaire du titre professionnel
          de Développeur Web et Web Mobile, j'ai réalisé plusieurs projets au
          cours de ma formation, ce qui m'a permis d'acquérir des compétences
          variées et solides dans ce domaine.
        </p>
        <p>
          Vous trouverez ici un aperçu de mes formations et de mes expériences
          dans le développement web. <br /> Je vous invite à poursuivre votre
          visite et vous remercie de votre attention.
        </p>

        <div className="button-container">
          <a href="#projet" onClick={(e) => handleScroll(e, "projet")}>
            <button>Continuez</button>
          </a>
        </div>
      </section>
      <Projet />
      <Formation />
      <Cv />
      <Contact />
    </main>
  );
}
