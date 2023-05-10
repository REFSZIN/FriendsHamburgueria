import { address } from "@prisma/client";
import { prisma } from "@/config";
interface Address {
  userId: number;
  cep: string;
  street: string;
  city: string;
  state: string;
  number: string;
  neighborhood: string;
  addressDetail?: string;
}

interface AddressRepository {
  create(addressData: Address): Promise<address>;
  findById(addressId: number): Promise<address | null>;
  find(userId: number): Promise<address[] | null>;
  update(addressId: number, updates: Partial<Omit<address, "id">>): Promise<address>;
  deleteById(addressId: number, userId: number): Promise<address | null>;
}

const addressRepository: AddressRepository = {
  async create(addressData: Address): Promise<address> {
    const user = await prisma.user.findUnique({
      where: {
        id: addressData.userId
      }
    });
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    const createdAddress = await prisma.address.create({ data: addressData });
    return createdAddress;
  },

  async deleteById(addressId: number): Promise<address> {
    const user = await prisma.address.findUnique({
      where: {
        id: addressId,
      }
    });
    if (!user) {
      throw new Error("Cadastro do Usuário não encontrado");
    }
    const deletedAddress = await prisma.address.delete({
      where: {
        id: addressId
      }
    });
    return deletedAddress;
  },

  async findById(addressId: number): Promise<address | null> {
    const foundAddress = await prisma.address.findUnique({ where: { id: addressId } });
    return foundAddress;
  },
  async find(userId: number): Promise<address[] | null> {
    const foundAddress = await prisma.address.findMany({ where: { userId: userId } });
    return foundAddress;
  },

  async update(address: number, updates: Partial<Omit<address, "id">>): Promise<address> {
    const updatedAddress = await prisma.address.update({
      where: { id: address },
      data: updates,
    });
    return updatedAddress;
  },
};

export default addressRepository;
