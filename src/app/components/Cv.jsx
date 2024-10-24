import Link from "next/link";

export default function Cv() {
  return (
    <section id="cv" className="section-cv">
      <div className="top-color"></div>
      <div className="middle-container">
        <p>Voir mon CV en ligne</p>
        <Link href="/cvonline">
          <button>CLIQUEZ ICI</button>
        </Link>
      </div>
      <div className="bottom-color"></div>
    </section>
  );
}
