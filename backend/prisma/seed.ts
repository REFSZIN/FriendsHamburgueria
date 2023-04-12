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
          photoUrl: "https://i.im.ge/2023/04/12/LQIjMX.AQUELE-C-BACON-2T-IFOOD.png",
          description: "This is product 1",
          category: "T1",
        },
        {
          name: "Product 2",
          price: 20,
          photoUrl: "https://i.im.ge/2023/04/12/LQIjMX.AQUELE-C-BACON-2T-IFOOD.png",
          description: "This is product 2",
          category: "T1",
        },
        {
          name: "Product 3",
          price: 30,
          photoUrl: "https://i.im.ge/2023/04/12/LQIjMX.AQUELE-C-BACON-2T-IFOOD.png",
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
