import addressService from "@/services/adress-service";
import { AuthenticatedRequest } from "@/middlewares";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function addressGet(req: Request, res: Response) {
  const addressId = Number(req.body.addressId);
  const userId = Number(req.body.userId);
  try {
    const address = await addressService.getAddressById(addressId, userId);
    if (!address) {
      return res.status(httpStatus.NOT_FOUND).json({ error: "Address not found" });
    }
    return res.status(httpStatus.OK).json(address);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
export async function addressPost(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { cep, street, city, state, number, neighborhood, addressDetail } = req.body;
  try {
    const address = await addressService.createAddress(userId, cep, street, city, state, number, neighborhood, addressDetail );
    return res.status(httpStatus.CREATED).json(address);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: "Something went wrong" });
  }
}

export async function addressDelete(req: AuthenticatedRequest, res: Response) {
  const addressId = Number(req.body.addressId);
  const { userId } = req;
  try {
    const address = await addressService.deleteAddressById(addressId, userId);
    if (!address) {
      return res.status(httpStatus.NOT_FOUND).json({ error: "Address not found" });
    }
    return res.status(httpStatus.OK).json(address);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function addressPut(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { cep, street, city, state, number, neighborhood, addressDetail, addressId } = req.body;
  if (!cep || !street || !city || !state || !number || !neighborhood || !addressId)  {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({ error: "Invalid input data" });
  }
  const address = parseInt(addressId);
  try {
    const updatedAddress = await addressService.updateAddress(address, userId, { cep, street, city, state, number, neighborhood, addressDetail });
    if (!updatedAddress) {
      return res.status(httpStatus.NOT_FOUND).json({ error: "Address not found" });
    }
    return res.status(httpStatus.OK).json(updatedAddress);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
