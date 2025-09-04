import { Request, Response, NextFunction } from "express";
import joi, { required } from "joi";

export const validateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = joi.object({
    customerId: joi.number().required().messages({
      "Number.empty": "customerId cannot be empty",
      "any.required": "customerId is required",
    }),
    address: joi.number().required().messages({
      "string.empty": "address cannot be empty",
      "any.required": "address is required",
    }),
  });
};
