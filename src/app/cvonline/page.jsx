"use client"; // Indique que ce composant est un Client Component

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import Next
import Image from "next/image";
import Link from "next/link";

import CROSS from "../assets/svg/cross.svg";
import Menu from "../assets/svg/menu.svg";
import BgParticle from "../components/BgParticle";

// import Components
import HomeCV from "../components/HomeCv";
import ProjetCV from "../components/ProjetCv";
import SkillCV from "../components/SkillCv";
import FormationCV from "../components/FormationCV";
import ExperienceCV from "../components/ExperienceCv";
import AProposCv from "../components/AProposCv";

// animation framer motion
const animationVariants = {
  initial: { opacity: 0, x: -100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

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
      case "Projet":
        return <ProjetCV />;
      case "Skill":
        return <SkillCV />;
      case "Formation":
        return <FormationCV />;
      case "Experience":
        return <ExperienceCV />;
      case "APropos":
        return <AProposCv />;
      default:
        return <HomeCV />;
    }
  };
  return (
    <section className="cv-online-container">
      <BgParticle />
      <div className={menuOpen ? "sidenav-cv active" : "sidenav-cv"}>
        <p className="close" onClick={toggleMenu}>
          <span className="cursor-menu-close">
            <Image className="cross-svg-cv" src={CROSS} alt="cross" />
          </span>
        </p>
        <ul className="">
          <li onClick={() => setActiveSection("Projet")}>
            <a onClick={closeMenu}>Projet</a>
          </li>
          <li onClick={() => setActiveSection("Skill")}>
            <a onClick={closeMenu}>Skills</a>
          </li>
          <li onClick={() => setActiveSection("Formation")}>
            <a onClick={closeMenu}>Formation</a>
          </li>
          <li onClick={() => setActiveSection("Experience")}>
            <a onClick={closeMenu}>Experience</a>
          </li>
          <li onClick={() => setActiveSection("APropos")}>
            <a onClick={closeMenu}>À Propos</a>
          </li>
        </ul>
        <Link href="/cv3d">
          <p className="extra-cv">Extra CV3D</p>
        </Link>
      </div>
      <div className="cv-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection} // Clé unique pour chaque Components
            variants={animationVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
      <a id="openBtn" onClick={toggleMenu}>
        <span className="burger-icon">
          <Image className="menu-svg-cv" src={Menu} alt="menuSvg" />
        </span>
      </a>
    </section>
  );
}
