import { Request, Response } from "express";
import { AppDataSource } from "../dataSource";
import { Mealkit } from "../database/entities/mealkit";

const mealkitRepo = AppDataSource.getRepository(Mealkit);

export const createKit = async (req: Request, res: Response) => {
  try {
    const { name, ingredients, instructions, price } = req.body;
    const kit = mealkitRepo.create({ name, ingredients, instructions, price });
    await mealkitRepo.save(kit);
    res.status(201).json(kit);
  } catch (err) {
    res.status(500).json({ message: "error creating mealkit", error: err });
  }
};

export const getAllKit = async (req: Request, res: Response) => {
  try {
    const kits = await mealkitRepo.find();
    res.status(200).json(kits);
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to fetch meal kits", error: error });
  }
};

export const getAkit = async (req: Request, res: Response) => {
  try {
    const kitId = Number(req.params.id);
    const kits = await mealkitRepo.findOne({ where: { id: kitId } });
    if (!kits) {
      res.status(500).json({ success: false, message: "meallkit not fund" });
    }
    res.send(kits);
  } catch (error) {
    res.status(500).json({ message: "failed to get mealki", error: error });
  }
};
