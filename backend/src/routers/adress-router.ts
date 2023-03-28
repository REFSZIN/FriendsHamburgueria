import { Router } from "express";

import { createAdressSchema, putAdressSchema } from "@/schemas";
import { validateBody, authenticateToken } from "@/middlewares";
import { addressGet, addressPut, addressPost, addressDelete } from "@/controllers";

const adressRouter = Router();

adressRouter.get("/", addressGet);
adressRouter.all("/*", authenticateToken);
adressRouter.delete("/", addressDelete);
adressRouter.post("/", validateBody(createAdressSchema), addressPost);
adressRouter.put("/", validateBody(putAdressSchema), addressPut);

export { adressRouter };
