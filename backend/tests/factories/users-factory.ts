import bcrypt from "bcrypt";
import faker from "@faker-js/faker";
import { user } from "@prisma/client";
import { prisma } from "@/config";

export async function createUser(params: Partial<user> = {}): Promise<user> {
  const incomingPassword = params.password || faker.internet.password(6);
  const hashedPassword = await bcrypt.hash(incomingPassword, 10);

  return prisma.user.create({
    data: {
      type: faker.datatype.number(100),
      pontos: faker.datatype.number(100),
      email: params.email || faker.internet.email(),
      password: hashedPassword,
    },
  });
}
