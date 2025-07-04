import { Request, Response } from "express";
import { order } from "../entities/orderEntity";
import { AppDataSource } from "../datasource";
import axios from "axios";

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
    } = req.body;
  } catch (error) {}
};
