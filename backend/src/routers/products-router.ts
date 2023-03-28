import { Router } from "express";

import { createProductSchema } from "@/schemas";
import { authenticateToken, validateBody } from "@/middlewares";
import { productsGet, productsPut, productsPost, productsById, productsDelete } from "@/controllers";

const productsRouter = Router();

productsRouter.get("/", productsGet);
productsRouter.get("/id", productsById);
productsRouter.all("/*", authenticateToken);
productsRouter.post("/", validateBody(createProductSchema), productsPost);
productsRouter.put("/", validateBody(createProductSchema), productsPut);
productsRouter.delete("/", productsDelete);

export { productsRouter };
