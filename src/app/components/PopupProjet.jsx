import Image from "next/image";
import PropTypes from "prop-types";

export default function Popup({ projet, onClose }) {
  if (!projet) return null; // Si aucun projet sélectionné, n'affiche rien

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h4>{projet.title}</h4>
        <p className="popup-categorie">{projet.categorie}</p>
        <div className="img-popup-container">
          <Image
            className="popup-image"
            src={projet.image}
            alt={projet.title}
            width={400}
            height={300}
          />
        </div>
        <p className="description-text">Description :</p>
        <p className="description-data">{projet.description}</p>
        <p className="techno-text">Techno utilisées :</p>
        <p className="techno-data">{projet.techno}</p>
        <p className="design-text">Design utilisés :</p>
        <p className="design-data">{projet.design}</p>
        <div className="button-popup-container">
          <button>
            {projet.githubLink && (
              <a
                href={projet.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </button>
          <button>
            {projet.siteLink && (
              <a
                href={projet.siteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Site Web
              </a>
            )}
          </button>
        </div>
        <div className="btn-close-container">
          <button className="close-btn" onClick={onClose}>
            Retour
          </button>
        </div>
      </div>
    </div>
  );
}

Popup.propTypes = {
  projet: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    techno: PropTypes.string,
    githubLink: PropTypes.string,
    siteLink: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};
