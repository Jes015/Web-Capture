import * as Joi from 'joi';

export const SchemaEnv = Joi.object({
  DB_NAME: Joi.string().min(3).required(),
  DB_USERNAME: Joi.string().min(3).required(),
  DB_PASSWORD: Joi.string().min(9).required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432).required(),
  AUTH_SECRET: Joi.string().min(20).required(),
  AUTH_EXPIRES: Joi.string().min(2).required(),
  AUTH_RESEND_TOKEN: Joi.string().min(10).required(),
}).required();
