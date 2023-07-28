import fastify from "fastify";
export const app = fastify();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
prisma.user.create({
  data: {
    name: "Fabio Nascimento",
    email: "fabio@gmail.com",
  },
});
