import { Router } from "express";

import { createAdressSchema, putAdressSchema } from "@/schemas";
import { validateBody, authenticateToken } from "@/middlewares";
import { addressGet, addressPut, addressPost, addressDelete, addressGetAll } from "@/controllers";

const adressRouter = Router();

adressRouter.all("/*", authenticateToken);
adressRouter.get("/", addressGet);
adressRouter.get("/all", addressGetAll);
adressRouter.delete("/", addressDelete);
adressRouter.post("/", validateBody(createAdressSchema), addressPost);
adressRouter.put("/", validateBody(putAdressSchema), addressPut);

export { adressRouter };
