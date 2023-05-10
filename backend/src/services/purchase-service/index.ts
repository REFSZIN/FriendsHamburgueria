import purchaseRepository from "@/repositories/purchase-repository";
import { Product, Purchase } from "@/schemas";
import userRepository from "@/repositories/user-repository";
import { Address } from "../adress-service";

async function getPurchase(): Promise<Purchase[]> {
  const purchases = await purchaseRepository.find();
  return purchases;
}

async function getPurchaseById(userId: number): Promise<Purchase> {
  const purchases = await purchaseRepository.findById(userId);
  return purchases;
}
async function createPurchase(userId: number, produtos: string[], address: string[], metodo: string, description: string, price: number): Promise<Purchase> {
  const user = await userRepository.find(userId);
  if (!user) {
    throw new Error("User not found");
  }
  if (produtos.length === 0) {
    throw new Error("Products list is empty");
  }
  const purchaseData = { userId, produtos, address, metodo, description, price };
  const purchase = await purchaseRepository.create(purchaseData);
  return purchase;
}

async function deletePurchase(userId: number, purchaseId: number): Promise<Purchase | null> {
  const purchase = await purchaseRepository.findById(purchaseId);
  if (!purchase) {
    throw new Error("Purchase not found");
  }
  if (purchase.userId !== userId) {
    throw new Error("User not authorized to delete this purchase");
  }
  const deletedPurchase = await purchaseRepository.deleteById(purchaseId);
  return deletedPurchase;
}

async function putPurchase(purchaseId: number, produtos: Product[], address: string[], metodo: string, description: string, price: number, userId: number): Promise<Purchase> {
  const purchase = await purchaseRepository.findById(purchaseId);
  if (!purchase) {
    throw new Error("Purchase not found");
  }
  if (purchase.userId !== userId) {
    throw new Error("User not authorized to update this purchase");
  }
  const purchaseData = { produtos, address, metodo, description, price };
  const updatedPurchase = await purchaseRepository.update(purchaseId, purchaseData);
  return updatedPurchase;
}

export default {
  getPurchase,
  getPurchaseById,
  createPurchase,
  deletePurchase,
  putPurchase
};
