/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/config";
import { Product, Purchase, AddressPut } from "@/schemas";
import { Address } from "@/services/adress-service";
import { Prisma } from "@prisma/client";

interface UpdatePurchaseInput {
  produtos: Array<Product>;
  address: string[];
  metodo: string;
  description?: string;
  price: number;
}

const purchaseRepository = {
  findById,
  find,
  create,
  deleteById,
  update,
};

async function findById(id: number): Promise<Purchase | null> {
  const purchase = await prisma.purchase.findUnique({
    where: { id },
  });
  return purchase || null;
}

async function find(): Promise<Purchase[]> {
  const purchases = await prisma.purchase.findMany();
  return purchases;
}

async function create(purchaseData: {
  userId: number;
  produtos: string[];
  address: string[];
  metodo: string;
  description?: string;
  price: number;
}): Promise<Purchase> {
  try {
    const { userId, produtos, address, metodo, description, price } = purchaseData;
    console.log("bbbbbbbbb", purchaseData);
    const purchase = await prisma.purchase.create({
      data: { userId, produtos, address, metodo, description, price }
    });
    console.log("aaaaaaaaaaaa", purchase);
    return purchase;
  } catch (error) {
    throw new Error("Ocorreu um erro ao criar a compra: " + error.message);
  }
}

async function deleteById(id: number): Promise<Purchase | null> {
  const purchase = await prisma.purchase.delete({
    where: { id },
  });
  return purchase || null;
}

async function update(id: number, purchaseData: UpdatePurchaseInput): Promise<Purchase> {
  const dataToUpdate: any = {};
  if (purchaseData.produtos) {
    dataToUpdate.produtos = purchaseData.produtos;
  }

  if (purchaseData.address) {
    dataToUpdate.address = purchaseData.address;
  }

  if (purchaseData.metodo) {
    dataToUpdate.metodo = purchaseData.metodo;
  }

  if (purchaseData.description) {
    dataToUpdate.description = purchaseData.description;
  }

  if (purchaseData.price) {
    dataToUpdate.price = purchaseData.price;
  }
  const purchase = await prisma.purchase.update({
    where: { id },
    data: dataToUpdate,
  });
  return purchase;
}

export default purchaseRepository;
