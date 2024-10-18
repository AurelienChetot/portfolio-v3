import { useEffect, useState } from "react";

import Image from "next/image";

export default function Projet() {
  const [projets, setProjets] = useState([]); // État pour stocker les projets
  const [loading, setLoading] = useState(true); // État pour gérer le chargement

  useEffect(() => {
    const fetchProjets = async () => {
      try {
        const response = await fetch("/api/projets");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des projets");
        }
        const data = await response.json();
        setProjets(data); // Met à jour l'état avec les données récupérées
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchProjets(); // Appelle la fonction pour récupérer les projets
  }, []); // Le tableau vide signifie que cela ne s'exécute qu'une fois au montage du composant

  if (loading) {
    return <p>Loading...</p>; // Affiche un message de chargement
  }

  return (
    <section id="projet" className="section-projet">
      <h3>Mes Projets</h3>
      <div className="projet-container">
        {projets.length === 0 ? (
          <p>Aucun projet disponible</p>
        ) : (
          projets.map((projet) => (
            <div key={projet.id}>
              <div className="overlay">
                <Image
                  className="img-projet"
                  src={projet.image}
                  alt={projet.title}
                  width={300}
                  height={200}
                />
              </div>
              <h4>{projet.title}</h4>
              <p>{projet.categorie}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
