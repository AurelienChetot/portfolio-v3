"use client"; // Indique que ce composant est un Client Component

import { useState } from "react";
import Image from "next/image";

import CROSS from "../assets/svg/cross.svg";
import Menu from "../assets/svg/menu.svg";
import BgParticle from "../components/BgParticle";

import Experience from "../components/ExperienceCv";
import HomeCV from "../components/HomeCv";

export default function CvOnline() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Experience":
        return <Experience />;
      case "Formation":

      default:
        return <HomeCV />;
    }
  };
  return (
    <section className="cv-online-container">
      <div className={menuOpen ? "sidenav-cv active" : "sidenav-cv"}>
        <BgParticle />
        <p className="close" onClick={toggleMenu}>
          <span className="cursor-menu-close">
            <Image className="cross-svg" src={CROSS} alt="cross" />
          </span>
        </p>
        <ul className="">
          <li onClick={() => setActiveSection("Experience")}>
            <a to="/" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li className="">
            <a to="/qui-suis-je" onClick={closeMenu}>
              Formation
            </a>
          </li>
          <li className="">
            <a to="/seance" onClick={closeMenu}>
              Projet
            </a>
          </li>
          <li className="">
            <a to="/therapie" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li className="">
            <a to="/objectifs" onClick={closeMenu}>
              Atouts
            </a>
          </li>
          <li className="">
            <a to="/contact" onClick={closeMenu}>
              à propos
            </a>
          </li>
        </ul>
      </div>
      <div className="cv-container">{renderSection()}</div>
      <a id="openBtn" onClick={toggleMenu}>
        <span className="burger-icon">
          <Image className="menu-svg" src={Menu} alt="menuSvg" />
        </span>
      </a>
    </section>
  );
}
