import { Router } from "express";

import { createadditionschema } from "@/schemas";
import { authenticateToken, validateBody } from "@/middlewares";
import { additionsGet, additionsPut, additionsPost, additionsById, additionsDelete } from "@/controllers";

const additionsRouter = Router();

additionsRouter.get("/", additionsGet);
additionsRouter.get("/id", additionsById);
additionsRouter.all("/*", authenticateToken);
additionsRouter.post("/", validateBody(createadditionschema), additionsPost);
additionsRouter.put("/", validateBody(createadditionschema), additionsPut);
additionsRouter.delete("/", additionsDelete);

export { additionsRouter };
