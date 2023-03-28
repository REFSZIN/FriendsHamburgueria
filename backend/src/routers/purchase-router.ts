import { Router } from "express";

import { createPurchaseSchema } from "@/schemas";
import { authenticateToken, validateBody } from "@/middlewares";
import { PurchaseGet, PurchasePut, PurchaseGetById, PurchasePost, PurchaseDelete } from "@/controllers";

const purchaseRouter = Router();

purchaseRouter.all("/*", authenticateToken);
purchaseRouter.get("/", PurchaseGet);
purchaseRouter.get("/id", PurchaseGetById);
purchaseRouter.post("/", validateBody(createPurchaseSchema), PurchasePost);
purchaseRouter.put("/", validateBody(createPurchaseSchema), PurchasePut);
purchaseRouter.delete("/", PurchaseDelete);

export { purchaseRouter };
