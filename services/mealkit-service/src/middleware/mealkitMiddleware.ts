import { Request, Response, NextFunction } from "express";
import joi, { required } from "joi";

export const validatMealkit = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = joi.object({
    name: joi.string().required().messages({
      "string.empty": "name cannot be empty",
      "any.requred": "name is required",
    }),
  });
};
