import { AuthenticatedRequest } from "@/middlewares";
import productsService from "@/services/products-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function productsById(req: Request, res: Response) {
  const productId = Number(req.body.productId);
  try {
    const product = await productsService.getProductsById(productId);
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

export async function productsGet(req: Request, res: Response) {
  try {
    const products = await productsService.getProducts();
    return res.status(httpStatus.CREATED).json({
      products
    });
  } catch (error) {
    if (error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function productsPost(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { name, photoUrl, price, description } = req.body;

  try {
    const productPosted = await productsService.postProducts( name, photoUrl, price, description, userId );
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

export async function productsPut(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { name, photoUrl, price, description, productId } = req.body;
  try {
    const productPuted = await productsService.putProducts(userId, productId, { name, photoUrl, price, description });
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

export async function productsDelete(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { productid } = req.body;
  try {
    const productDeleted = await productsService.productsDelete( productid, userId );
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
