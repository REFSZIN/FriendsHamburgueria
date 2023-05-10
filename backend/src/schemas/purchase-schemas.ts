import Joi from "joi";

export interface Purchase {
  userId: number;
  produtos: string[];
  address: string[];
  metodo: string;
  description?: string;
  price: number;
}

export const createPurchaseSchema = Joi.object<Purchase>({
  produtos: Joi.array().required(),
  userId: Joi.number(),
  metodo: Joi.string().required(),
  price: Joi.number().required(),
  address: Joi.array().required(),
  description: Joi.string(),
});
