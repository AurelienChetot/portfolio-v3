"use client";

// import img/svg
import Image from "next/image";
import SCROLL from "../app/assets/svg/scroll.svg";
import MENU from "../app/assets/svg/menu.svg";
import CROSS from "../app/assets/svg/cross.svg";

// import particle
import BgParticle from "../app/components/BgParticle";

// import react
import { useState } from "react";

export default function Home() {
  // scroll li
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
      });
    }
  };

  // menu burger
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
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
          <h1
            onClick={() => {
              handleScroll("top-page");
              closeMenu();
            }}
          >
            AURÉLIEN CHETOT
          </h1>
          <div className={menuOpen ? "sidenav active" : "sidenav"}>
            <a className="close" onClick={toggleMenu}>
              <span className="cursor-menu-close">
                <Image src={CROSS} alt="cross" />
              </span>
            </a>
            <ul>
              <li
                onClick={() => {
                  handleScroll("presentation");
                  closeMenu();
                }}
              >
                Accueil
              </li>
              <li
                onClick={() => {
                  handleScroll("projet");
                  closeMenu();
                }}
              >
                Mes Projets
              </li>
              <li>Formation</li>
              <li>CV en ligne</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </header>
      <section id="top-page" className="section-home">
        <h2>
          Bienvenue sur mon <br /> Portfolio
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
          <button
            onClick={() => {
              handleScroll("projet");
            }}
          >
            Continuez
          </button>
        </div>
      </section>
      <section id="projet" className="section-projet">
        <div className="projet-container">
          <h3>Mes Projets</h3>
          <p>Image</p>
          <p>Texte</p>
          <p>categorie</p>
        </div>
      </section>
    </main>
  );
}
