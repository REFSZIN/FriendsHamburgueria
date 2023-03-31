import additionsRepository from "@/repositories/additions-repository";
import { exclude } from "@/utils/prisma-utils";
import { invalidCredentialsError } from "./errors";
import { Addition } from "@/schemas";
import userRepository from "@/repositories/user-repository";

async function getadditionsById(additionsId: number): Promise<Addition | null> {
  const existingadditions = await additionsRepository.findById(additionsId);
  if (!existingadditions) {
    throw new Error("Endereço não encontrado");
  }
  return existingadditions;
}

async function getadditions(): Promise<Addition[] | null> {
  const existingadditions = await additionsRepository.find();
  if (!existingadditions) {
    throw new Error("Endereço não encontrado");
  }
  return existingadditions;
}

async function postadditions(name: string, photoUrl: string, price: number, description: string, userId: number, category: string, quantity: number ): Promise<Addition> {
  // Verifica se o user existe e administ
  const existingUser = await userRepository.find(userId);
  if (!existingUser) {
    throw new Error("User não encontrado");
  }
  if (existingUser.type !== 999) {
    throw invalidCredentialsError();
  }
  const additionsData = { name, photoUrl, price, description, category, quantity };  
  const createdadditions = await additionsRepository.create(additionsData);
  return createdadditions;
}

async function additionsDelete(additionsId: number, userId: number): Promise<Addition | null> {
  // Verifica se o user existe e administ
  const existingUser = await userRepository.find(userId);
  if (!existingUser) {
    throw new Error("User não encontrado");
  }
  if (existingUser.type !== 999) {
    throw invalidCredentialsError();
  }
  const deletedAddress = await additionsRepository.deleteById(additionsId);
  return deletedAddress;
}

async function putadditions(additionsId: number, userId: number, updates: Partial<Omit<Addition, "id">>): Promise<Addition> {
  // Verifica se o user existe e administ
  const existingUser = await userRepository.find(userId);
  if (!existingUser) {
    throw new Error("User não encontrado");
  }
  if (existingUser.type !== 999) {
    throw invalidCredentialsError();
  }
  // Atualiza o endereço
  const updatedAddress = await additionsRepository.update(additionsId, exclude(updates));
  return updatedAddress;
}

const additionsService = {
  putadditions,
  additionsDelete,
  postadditions,
  getadditionsById,
  getadditions
};

export default additionsService;
export * from "./errors";
