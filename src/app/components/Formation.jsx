import { useEffect, useState } from "react";

import Image from "next/image";

export default function Formation() {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFormation = async () => {
      try {
        const response = await fetch("/api/formations");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des projets");
        }
        const data = await response.json();
        setFormations(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFormation();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <section id="formation" className="section-formation">
      <h5>Mes Formations</h5>
      <div className="container-formation">
        {formations.length === 0 ? (
          <p>Pas de formation disponible</p>
        ) : (
          formations.map((formation, index) => (
            <div
              className={`formation-flex ${
                index % 2 === 1 ? "align-left" : ""
              }`}
              key={formation.id}
            >
              <div className="img-container">
                <Image
                  className="img-formation"
                  src={formation.image}
                  alt={formation.title}
                  width={300}
                  height={200}
                />
              </div>
              <div className="text-formation">
                <p className="date-text">{formation.date}</p>
                <p className="title-text">{formation.title}</p>
                <p className="description-text">{formation.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
