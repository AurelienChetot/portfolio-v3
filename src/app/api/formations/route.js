// src/app/api/formations/route.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  // Vérifie si la requete provient d'une source autorisée (à optimiser pour la sécuritée)
  const referrer = request.headers.get("referer");
  if (!referrer || !referrer.includes("http://localhost:3000/")) {
    return new Response("Unauthorized", { status: 403 });
  }

  try {
    const formations = await prisma.formation.findMany();
    return new Response(JSON.stringify(formations), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
