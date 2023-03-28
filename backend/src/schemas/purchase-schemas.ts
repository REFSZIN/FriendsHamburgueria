import {  } from "@/services/users-service";
import Joi from "joi";

export interface Purchase {
  userId: number;
  produtos: string[];
  address: string;
  metodo: number;
  description?: string;
  price: number;
}

export const createPurchaseSchema = Joi.object<Purchase>({
  produtos: Joi.array().required(),
  userId: Joi.number(),
  metodo: Joi.number(),
  price: Joi.number(),
  address: Joi.string().required(),
  description: Joi.string().optional(),
});
