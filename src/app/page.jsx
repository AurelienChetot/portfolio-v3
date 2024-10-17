"use client";

// import img/svg
import Image from "next/image";
import SCROLL from "../app/assets/svg/scroll.svg";

// import particle
import BgParticle from "../app/components/BgParticle";

export default function Home() {
  return (
    <main className="container-page">
      <BgParticle />
      <section className="section-home">
        <header>
          <nav>
            <h1>AURÉLIEN CHETOT</h1>
            <ul>
              <li>Accueil</li>
              <li>Mes Projets</li>
              <li>Formation</li>
              <li>CV en ligne</li>
              <li>Contact</li>
            </ul>
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
      <section className="section-presentation">
        <h2>
          Bienvenue sur mon <br /> Portfolio
        </h2>
      </section>
    </main>
  );
}
