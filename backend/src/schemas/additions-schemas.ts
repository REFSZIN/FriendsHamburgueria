import Joi from "joi";

export interface Addition {
  name: string,
  price: number,
  quantity: number,
  photoUrl: string,
  category: string,
  description: string
}

export const createadditionschema = Joi.object<Addition>({
  name: Joi.string().min(6).required(),
  price: Joi.number(),
  quantity: Joi.number(),
  category: Joi.string().required(),
  photoUrl: Joi.string().min(8).required(),
  description: Joi.string().min(6).required(),
});
