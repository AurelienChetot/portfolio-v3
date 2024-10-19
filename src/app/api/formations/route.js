import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    // Récupère tous les projets depuis la base de données
    const formations = await prisma.formation.findMany();

    // Retourne les projets avec un statut 200 (succès)
    return new Response(JSON.stringify(formations), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // En cas d'erreur, on retourne une erreur 500 avec le message d'erreur
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
