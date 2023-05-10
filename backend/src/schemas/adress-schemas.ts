import { Address } from "@/services/adress-service";
import Joi from "joi";
export interface AddressPut {
  addressId: number;
  cep: string;
  street: string;
  city: string;
  state: string;
  number: string;
  neighborhood: string;
  addressDetail?: string;
  status: string;
}

export const createAdressSchema = Joi.object<Address>({
  cep: Joi.string().regex(/^\d{5}-\d{3}$/).required(),
  street: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  number: Joi.string().required(),
  neighborhood: Joi.string().required(),
  addressDetail: Joi.string().optional()
});

export const putAdressSchema = Joi.object<AddressPut>({
  cep: Joi.string().regex(/^\d{5}-\d{3}$/).required(),
  street: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  number: Joi.string().required(),
  neighborhood: Joi.string().required(),
  addressDetail: Joi.string().optional(),
  addressId: Joi.string().required()
});
