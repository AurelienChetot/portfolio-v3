// src/app/api/projets/route.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  // Vérifier si la requête provient d'une source autorisée
  const referrer = request.headers.get("referer");
  if (!referrer || !referrer.includes("http://localhost:3000/")) {
    return new Response("Unauthorized", { status: 403 });
  }

  try {
    const projets = await prisma.projet.findMany();
    return new Response(JSON.stringify(projets), {
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
