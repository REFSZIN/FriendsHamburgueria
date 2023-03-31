/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/config";
import { Product, Purchase } from "@/schemas";
import { Prisma } from "@prisma/client";

interface UpdatePurchaseInput {
  produtos?: Array<Product>;
  address?: string;
  metodo?: string;
  description?: string;
  price?: number;
  category?: string;
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
  produtos: Prisma.purchaseCreateprodutosInput;
  address: string;
  metodo: string;
  description: string;
  price: number;
}): Promise<Purchase> {
  const { userId, produtos, address, metodo, description, price } = purchaseData;
  const purchase = await prisma.purchase.create({
    data: { userId, produtos, address, metodo: parseInt(metodo), description, price }
  });
  return purchase;
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
