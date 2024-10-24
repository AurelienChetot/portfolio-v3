import Link from "next/link";

export default function AProposCv() {
  return (
    <section className="a-propos-cv-container">
      <p>
        Passionné par le <span>développement web</span> et titulaire d’un titre
        de Développeur Web obtenu à la <span>Wild Code School</span>, je suis
        ouvert à des <span>opportunités d'emploi</span> ou à des{" "}
        <span>projets collaboratifs</span> ou <span>personnel</span>. Mon
        objectif est de mettre mes compétences au service d'initiatives
        innovantes et <span>d'apprendre</span> à travers de nouvelles
        expériences. N'hésitez pas à me <span>contacter</span> pour discuter de
        vos idées ou de toute proposition.
      </p>
      <Link href="/#contact">
        <button>Contact</button>
      </Link>
    </section>
  );
}
