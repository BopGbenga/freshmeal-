import { Request, Response } from "express";
import { order } from "../database/entities/orderEntity";
import { AppDataSource } from "../datasource";

const orderRepo = AppDataSource.getRepository(order);

export const createOrder = async (req: Request, res: Response) => {
  try {
    const {
      CustomerName,
      customerPhone,
      address,
      quantity,
      totalprice,
      mealkitId,
      mealKitName,
      mealkitPrice,
    } = req.body;
  } catch (error) {}
};
