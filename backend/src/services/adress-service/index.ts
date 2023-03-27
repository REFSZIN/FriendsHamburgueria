import addressRepository from "@/repositories/adress-repository";
import { exclude } from "@/utils/prisma-utils";
import { address } from "@prisma/client";
import { invalidCredentialsError } from "./errors";

export interface Address {
  cep: string;
  street: string;
  city: string;
  state: string;
  number: string;
  neighborhood: string;
  addressDetail?: string;
}

async function getAddressById(addressId: number, userId: number): Promise<address | null> {
  const existingAddress = await addressRepository.findById(addressId);
  if (!existingAddress) {
    throw new Error("Endereço não encontrado");
  }
  if (existingAddress.userId !== userId ) {
    throw invalidCredentialsError();
  }
  return existingAddress;
}

async function createAddress( userId: number, cep: string, street: string, city: string, state: string, number: string, neighborhood: string, addressDetail: string): Promise<Address> {
  const addressData = { cep, userId, street, city, state, number, neighborhood, addressDetail };  
  const createdAddress = await addressRepository.create(addressData);
  return createdAddress;
}

async function deleteAddressById(addressId: number, userId: number): Promise<address | null> {
  const existingAddress = await addressRepository.findById(addressId);
  if (!existingAddress) {
    throw new Error("Endereço não encontrado");
  }
  if (existingAddress.userId !== userId ) {
    throw invalidCredentialsError();
  }
  const deletedAddress = await addressRepository.deleteById(addressId, userId );
  return deletedAddress;
}

async function updateAddress(address: number, userId: number, updates: Partial<Omit<address, "id">>): Promise<address> {
  // Verifica se o endereço existe
  const existingAddress = await addressRepository.findById(address);
  if (!existingAddress) {
    throw new Error("Endereço não encontrado");
  }

  if (existingAddress.userId !== userId) {
    throw invalidCredentialsError();
  }

  // Atualiza o endereço
  const updatedAddress = await addressRepository.update(address, exclude(updates));
  return updatedAddress;
}

const addressService = {
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddressById,
};

export default addressService;
export * from "./errors";
