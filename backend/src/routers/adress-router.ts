import { Router } from "express";

import { createAdressSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { adressGet, adressPut, adressPost} from "@/controllers";

const adressRouter = Router();

adressRouter.get("/", adressGet);
adressRouter.post("/", validateBody(createAdressSchema), adressPost);
adressRouter.put("/", validateBody(createAdressSchema), adressPut);

export { adressRouter };
