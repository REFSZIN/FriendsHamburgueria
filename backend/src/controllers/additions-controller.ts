import { AuthenticatedRequest } from "@/middlewares";
import additionsService from "@/services/additions-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function additionsById(req: Request, res: Response) {
  const productId = Number(req.body.productId);
  try {
    const product = await additionsService.getadditionsById(productId);
    if (!product) {
      return res.status(httpStatus.NOT_FOUND).json({ error: "Product not found" });
    }
    return res.status(httpStatus.CREATED).json({
      product
    });
  } catch (error) {
    if (error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function additionsGet(req: Request, res: Response) {
  try {
    const additions = await additionsService.getadditions();
    return res.status(httpStatus.CREATED).json({
      additions
    });
  } catch (error) {
    if (error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function additionsPost(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { name, photoUrl, price, description, category, quantity } = req.body;

  try {
    const productPosted = await additionsService.postadditions( name, photoUrl, price, description, userId, category, quantity );
    return res.status(httpStatus.CREATED).json({
      productPosted
    });
  } catch (error) {
    if (error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function additionsPut(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { name, photoUrl, price, description, productId, category, quantity } = req.body;
  try {
    const productPuted = await additionsService.putadditions(userId, productId, { name, photoUrl, price, description, category, quantity });
    return res.status(httpStatus.CREATED).json({
      productPuted
    });
  } catch (error) {
    if (error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function additionsDelete(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { productid } = req.body;
  try {
    const productDeleted = await additionsService.additionsDelete( productid, userId );
    return res.status(httpStatus.CREATED).json({
      productDeleted
    });
  } catch (error) {
    if (error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
