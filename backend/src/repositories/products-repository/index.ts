import { prisma } from "@/config";
import { Product } from "@/schemas";

interface CreateProductInput {
  name: string;
  photoUrl: string;
  price: number;
  description: string;
}

interface UpdateProductInput {
  name?: string;
  photoUrl?: string;
  price?: number;
  description?: string;
}

const productRepository = {
  findById,
  find,
  create,
  deleteById,
  update,
};

async function findById(id: number): Promise<Product | null> {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  return product || null;
}

async function find(): Promise<Product[]> {
  const products = await prisma.product.findMany();
  return products;
}

async function create(productData: CreateProductInput): Promise<Product> {
  const product = await prisma.product.create({
    data: productData,
  });
  return product;
}

async function deleteById(id: number): Promise<Product | null> {
  const product = await prisma.product.delete({
    where: { id },
  });
  return product || null;
}

async function update(id: number, productData: UpdateProductInput): Promise<Product> {
  const product = await prisma.product.update({
    where: { id },
    data: productData,
  });
  return product;
}
export default productRepository;
