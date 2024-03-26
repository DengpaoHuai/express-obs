import Joi from "joi";

export const movieSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().required(),
  rating: Joi.number().required(),
  actors: Joi.array().items(Joi.string()).required(),
}).options({ abortEarly: false });

export const movieUpdateSchema = Joi.object({
  title: Joi.string(),
  year: Joi.number(),
  rating: Joi.number(),
  actors: Joi.array().items(Joi.string()),
}).options({ abortEarly: false });
