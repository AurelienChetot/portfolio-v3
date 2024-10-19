import { useEffect, useState } from "react";
import Image from "next/image";
import Popup from "../components/PopupProjet"; // Importer le composant Popup

export default function Projet() {
  const [projets, setProjets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProjet, setSelectedProjet] = useState(null); // État pour le projet sélectionné
  const [showPopup, setShowPopup] = useState(false); // État pour l'affichage du popup

  useEffect(() => {
    const fetchProjets = async () => {
      try {
        const response = await fetch("/api/projets");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des projets");
        }
        const data = await response.json();
        setProjets(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjets();
  }, []);

  // Popup projets

  const handleProjectClick = (projet) => {
    setSelectedProjet(projet);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedProjet(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section id="projet" className="section-projet">
      <h3>Mes Projets</h3>
      <div className="projet-container">
        {projets.length === 0 ? (
          <p>Aucun projet disponible</p>
        ) : (
          projets.map((projet) => (
            <div key={projet.id} onClick={() => handleProjectClick(projet)}>
              <Image
                className="img-projet"
                src={projet.image}
                alt={projet.title}
                width={300}
                height={200}
              />
              <h4>{projet.title}</h4>
              <p>{projet.categorie}</p>
            </div>
          ))
        )}
      </div>
      {/* Utilisation du popup components  */}
      {showPopup && (
        <Popup projet={selectedProjet} onClose={handleClosePopup} />
      )}
    </section>
  );
}
