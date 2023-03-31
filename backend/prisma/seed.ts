import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const product = await prisma.product.findMany();
  if (product.length === 0) {
    await prisma.product.createMany({
      data: [
        {
          name: "Product 1",
          price: 10,
          photoUrl: "https://example.com/product1.jpg",
          description: "This is product 1",
          category: "T1",
        },
        {
          name: "Product 2",
          price: 20,
          photoUrl: "https://example.com/product2.jpg",
          description: "This is product 2",
          category: "T1",
        },
        {
          name: "Product 3",
          price: 30,
          photoUrl: "https://example.com/product3.jpg",
          description: "This is product 3",
          category: "T2",
        }
      ]
    });
  }
}
main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
