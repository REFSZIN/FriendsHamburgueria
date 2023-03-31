import Joi from "joi";
export interface Product {
  name: string,
  price: number,
  photoUrl: string,
  category: string,
  description: string
}

export const createProductSchema = Joi.object<Product>({
  name: Joi.string().min(6).required(),
  price: Joi.number(),
  category: Joi.string().required(),
  photoUrl: Joi.string().min(8).required(),
  description: Joi.string().min(6).required(),
});
