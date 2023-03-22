import { Router } from "express";

import { createProductSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { productsGet, productsPut, productsPost } from "@/controllers";

const productsRouter = Router();

productsRouter.get("/", productsGet);
productsRouter.post("/", validateBody(createProductSchema), productsPost);
productsRouter.put("/", validateBody(createProductSchema), productsPut);

export { productsRouter };
