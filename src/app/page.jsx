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
      <section id="top-page" className="section-home">
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
                <li>Mes Projets</li>
                <li>Formation</li>
                <li>CV en ligne</li>
                <li>Contact</li>
              </ul>
            </div>
          </nav>
        </header>
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
        <h2>
          Bienvenue sur mon <br /> Portfolio
        </h2>
      </section>
    </main>
  );
}
