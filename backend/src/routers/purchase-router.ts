import { Router } from "express";

import { createPurchaseSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { PurchaseGet , PurchasePut, PurchasePost} from "@/controllers";

const purchaseRouter = Router();

purchaseRouter.get("/", PurchaseGet);
purchaseRouter.post("/", validateBody(createPurchaseSchema), PurchasePost);
purchaseRouter.put("/", validateBody(createPurchaseSchema), PurchasePut);

export { purchaseRouter };
