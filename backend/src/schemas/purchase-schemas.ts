import {  } from "@/services/users-service";
import Joi from "joi";

export const createPurchaseSchema = Joi.object<unknown>({
  email: Joi.string().email().required(),
});
