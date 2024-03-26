import { Request, Response } from "express";
import Joi from "joi";

const validateWithJoi = (schema: Joi.ObjectSchema) => {
  return (request: Request, response: Response, next: () => void) => {
    const { error } = schema.validate(request.body);
    if (error) {
      response.status(400).json(error.details);
      return;
    }
    next();
  };
};

export default validateWithJoi;
