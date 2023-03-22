import {  } from "@/services/users-service";
import Joi from "joi";

export const createAdressSchema = Joi.object<unknown>({
  password: Joi.string().min(6).required(),
});
