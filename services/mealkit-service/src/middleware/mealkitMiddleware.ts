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
    ingredients: joi.string().required().messages({
      "string.empty": "ingredients cannot be empty",
      "any.required": "ingredients is required",
    }),
    instructions: joi.string().required().messages({
      "string.empty": "instructions cannot be empty",
      "any.required": "instructions is required",
    }),
    price: joi.number().required().messages({
      "string.empty": "price cannot be empty",
      "any.required": "price is required",
      "number.base": "invalid type, please provide a valid number",
    }),
  });
};
