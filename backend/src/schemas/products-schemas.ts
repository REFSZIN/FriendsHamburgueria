import {  } from "@/services/users-service";
import Joi from "joi";

export const createProductSchema = Joi.object<unknown>({
  name: Joi.string().min(6).required(),
  price: Joi.number(),
  photoUrl: Joi.string().min(8).required(),
  description: Joi.string().min(6).required(),
});
