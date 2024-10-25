const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Données pour la table Projet
  const projets = [
    {
      id: 1,
      title: "Origin digital",
      description:
        "Bienvenue sur Origin Digital (Projet 3 lors de ma formation).",
      techno: "React - Sass - Vite.js - Node.js - Express.js - MySql",
      design: "Figma - Canva",
      categorie: "Site Démo",
      githubLink:
        "https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-CrewDragon-P3-Origins-Digital",
      siteLink: "https://origins-digital.remote-fr-2.wilders.dev",
      image: "https://i.imgur.com/s53soZ2.png",
    },
    {
      id: 2,
      title: "Code-Nature",
      description:
        "Visite des parcs nationaux de France, défi lors de ma formation réalisé un site en 48h",
      techno: "React - Tailwind - Vite.js - Node.js",
      design: "Figma - Canva",
      categorie: "Site Défi",
      githubLink: "https://github.com/AurelienChetot/CodeNature",
      siteLink: "https://code-nature.netlify.app/",
      image: "https://i.imgur.com/kHuQrKs.png",
    },
    {
      id: 3,
      title: "MétéoDuJour",
      description: "Prévision 5 jours avec carte interactive (en cours de dev)",
      techno: "React - Sass - Vite.js - ApiOpenWeatherMap",
      design: "Figma - Canva",
      categorie: "Site Démo",
      githubLink: "https://github.com/AurelienChetot/meteodujour",
      siteLink: "https://meteodujourio.netlify.app/",
      image: "https://i.imgur.com/iFJyAV5.png",
    },
    {
      id: 4,
      title: "Star-Wild",
      description:
        "Visite du système solaire en 3D grâce a Three.js et l'api du système solaire (Projet 2 lors de ma formation).",
      techno: "React - Sass - Vite.js - Node.js - ApiSystèmeSolaire",
      design: "Figma - Canva - Excalidraw",
      categorie: "Site Démo",
      githubLink:
        "https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-CrewDragon-P2-Team3",
      siteLink: "https://star-wild.netlify.app/",
      image: "https://i.imgur.com/osZGfEv.png",
    },
    {
      id: 5,
      title: "Patricia Deias",
      description:
        "Découvrez le site de Patricia Deias Psychopraticienne, n'hésitez pas à la contacter (en cours de dev)",
      techno: "React - Vite.js - Tailwind",
      design: "Figma - Canva - Excalidraw",
      categorie: "Site Vitrine",
      githubLink: "https://github.com/AurelienChetot/ProjetP",
      siteLink: "https://patricia-deias.netlify.app/",
      image: "https://i.imgur.com/4hGzNBg.png",
    },
    {
      id: 6,
      title: "Qui?Zip",
      description:
        "Découvrez un Quiz de mes début de formation. (Projet 1 lors de ma formation).",
      techno: "HTML/CSS3 - JavaScript",
      design: "Figma - Canva - Excalidraw",
      categorie: "Site Démo",
      githubLink: "https://github.com/AurelienChetot/Projet-1-Team-3",
      siteLink: "https://aurelienchetot.github.io/Projet-1-Team-3/",
      image: "https://i.imgur.com/5O9PkI8.png",
    },
    {
      id: 7,
      title: "Splitter",
      description: "Divisez et calculez la somme du pourboire",
      techno: "HTML/CSS3 - JavaScript",
      design: "Figma - Canva",
      categorie: "Site Démo",
      githubLink: "https://github.com/AurelienChetot/Splitter",
      siteLink: "https://aurelienchetot.github.io/Splitter/",
      image: "https://i.imgur.com/NAuprJF.png",
    },
    {
      id: 8,
      title: "Mon Portfolio",
      description:
        "Explorez mon portfolio, où j'utilise une nouvelle stack pour enrichir mes compétences.",
      techno: "React - Sass - Next.js - Prisma ORM - MySql",
      design: "Figma - Canva",
      categorie: "Site Vitrine",
      githubLink: "",
      siteLink: "",
      image: "https://i.imgur.com/IGaPWQu.png",
    },
  ];

  // Données pour la table Formation
  const formations = [
    {
      id: 1,
      image: "https://i.imgur.com/fNuZAT5.png",
      title: "Développeur Web / Web mobile",
      description:
        "Formation distanciel à la Wild Code School (HTML/CSS3, JavaScript, React, Express.js, MySql)",
      date: "2024",
    },
    {
      id: 2,
      image: "https://i.imgur.com/zvYsI1v.png",
      title: "Maintenance des véhicules auto",
      description: "Bac Pro à Camille du Gast Chalon-sur-Saône",
      date: "2013-2014",
    },
    {
      id: 3,
      image: "https://i.imgur.com/HEA68HA.png",
      title: "Maintenance des véhicules auto",
      description: "CAP à Camille du Gast Chalon-sur-Saône",
      date: "2011-2013",
    },
  ];

  // Insérer les données dans la base de données
  for (const projet of projets) {
    await prisma.projet.upsert({
      where: { id: projet.id }, // Vérifie si l'enregistrement existe
      update: {}, // Ne met pas à jour les données si elles existent déjà
      create: projet, // Crée un nouvel enregistrement
    });
  }

  for (const formation of formations) {
    await prisma.formation.upsert({
      where: { id: formation.id }, // Vérifie si l'enregistrement existe
      update: {}, // Ne met pas à jour les données si elles existent déjà
      create: formation, // Crée un nouvel enregistrement
    });
  }

  console.log("Données insérées avec succès !");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
