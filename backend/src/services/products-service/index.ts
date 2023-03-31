import productRepository from "@/repositories/products-repository";
import { exclude } from "@/utils/prisma-utils";
import { invalidCredentialsError } from "./errors";
import { Product } from "@/schemas";
import userRepository from "@/repositories/user-repository";

async function getProductsById(productId: number): Promise<Product | null> {
  const existingProduct = await productRepository.findById(productId);
  if (!existingProduct) {
    throw new Error("Endereço não encontrado");
  }
  return existingProduct;
}

async function getProducts(): Promise<Product[] | null> {
  const existingProducts = await productRepository.find();
  if (!existingProducts) {
    throw new Error("Endereço não encontrado");
  }
  return existingProducts;
}

async function postProducts(name: string, photoUrl: string, price: number, description: string, userId: number, category: string  ): Promise<Product> {
  // Verifica se o user existe e administ
  const existingUser = await userRepository.find(userId);
  if (!existingUser) {
    throw new Error("User não encontrado");
  }
  if (existingUser.type !== 999) {
    throw invalidCredentialsError();
  }
  const productData = { name, photoUrl, price, description, category };  
  const createdProduct = await productRepository.create(productData);
  return createdProduct;
}

async function productsDelete(productId: number, userId: number): Promise<Product | null> {
  // Verifica se o user existe e administ
  const existingUser = await userRepository.find(userId);
  if (!existingUser) {
    throw new Error("User não encontrado");
  }
  if (existingUser.type !== 999) {
    throw invalidCredentialsError();
  }
  const deletedAddress = await productRepository.deleteById(productId);
  return deletedAddress;
}

async function putProducts(productId: number, userId: number, updates: Partial<Omit<Product, "id">>): Promise<Product> {
  // Verifica se o user existe e administ
  const existingUser = await userRepository.find(userId);
  if (!existingUser) {
    throw new Error("User não encontrado");
  }
  if (existingUser.type !== 999) {
    throw invalidCredentialsError();
  }
  // Atualiza o endereço
  const updatedAddress = await productRepository.update(productId, exclude(updates));
  return updatedAddress;
}

const productsService = {
  putProducts,
  productsDelete,
  postProducts,
  getProductsById,
  getProducts
};

export default productsService;
export * from "./errors";
