import prisma from "@/lib/prisma";
import { hash } from "bcrypt-ts";

export async function getUser(email: string) {
  return await prisma.user.findFirst({ where: { email } });
}

export async function createUser(email: string, password: string) {
  const passwordHash = await hash(password, 10);

  return await prisma.user.create({
    data: {
      email,
      password: passwordHash,
    },
  });
}

/* Deperecated method, kept as a query example
export async function getUserByCredentials(email: string, password: string) {
  return await prisma.user.findFirst({
    where: {
      AND: [{ email }, { password }],
    },
  });
}
*/
