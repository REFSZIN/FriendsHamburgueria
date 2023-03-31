import { prisma } from "@/config";
import { Addition } from "@/schemas";

interface CreateProductInput {
  name: string;
  photoUrl: string;
  quantity: number;
  price: number;
  description: string;
  category: string;
}

interface UpdateProductInput {
  name?: string;
  photoUrl?: string;
  price?: number;
  quantity?: number;
  category?: string;
  description?: string;
}

const productRepository = {
  findById,
  find,
  create,
  deleteById,
  update,
};

async function findById(id: number): Promise<Addition | null> {
  const additions = await prisma.additions.findUnique({
    where: { id },
  });
  return additions || null;
}

async function find(): Promise<Addition[]> {
  const products = await prisma.additions.findMany();
  return products;
}

async function create(productData: CreateProductInput): Promise<Addition> {
  const additions = await prisma.additions.create({
    data: productData,
  });
  return additions;
}

async function deleteById(id: number): Promise<Addition | null> {
  const additions = await prisma.additions.delete({
    where: { id },
  });
  return additions || null;
}

async function update(id: number, productData: UpdateProductInput): Promise<Addition> {
  const additions = await prisma.additions.update({
    where: { id },
    data: productData,
  });
  return additions;
}
export default productRepository;
