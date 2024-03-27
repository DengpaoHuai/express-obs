import Joi from "joi";

const usersSchemas = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).options({ abortEarly: false });

export default usersSchemas;
