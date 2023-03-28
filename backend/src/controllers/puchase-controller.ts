import { AuthenticatedRequest } from "@/middlewares";
import purchaseService from "@/services/purchase-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function PurchaseGet(req: AuthenticatedRequest, res: Response) {
  try {
    const purchases = await purchaseService.getPurchase();
    return res.status(httpStatus.OK).json(purchases);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function PurchaseGetById(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    const purchases = await purchaseService.getPurchaseById(userId);
    return res.status(httpStatus.OK).json(purchases);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function PurchasePost(req: AuthenticatedRequest, res: Response) {
  const { produtos, address, metodo, description, price } = req.body;
  const { userId } = req;
  try {
    const purchasePosted = await purchaseService.createPurchase(userId, produtos, address, metodo, description, price);
    return res.status(httpStatus.CREATED).json(purchasePosted);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function PurchaseDelete(req: AuthenticatedRequest, res: Response) {
  const { purchaseId } = req.body;
  const { userId } = req;
  try {
    const purchaseDeleted = await purchaseService.deletePurchase(userId, purchaseId);
    return res.status(httpStatus.OK).json(purchaseDeleted);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function PurchasePut(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { purchaseId, produtos, address, metodo, description, price } = req.body;
  try {
    const purchasePuted = await purchaseService.putPurchase(purchaseId, produtos, address, metodo, description, price, userId);
    return res.status(httpStatus.OK).json(purchasePuted);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
