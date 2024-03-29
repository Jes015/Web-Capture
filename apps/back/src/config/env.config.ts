import * as Joi from 'joi';

export const SchemaEnv = Joi.object({
  DB_NAME: Joi.string().min(3).required(),
  DB_USERNAME: Joi.string().min(3).required(),
  DB_PASSWORD: Joi.string().min(9).required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432).required(),
  DB_SSL: Joi.boolean().default('true'),
  AUTH_SECRET: Joi.string().min(20).required(),
  AUTH_EXPIRES: Joi.string().min(2).required(),
  AUTH_RESEND_API_KEY: Joi.string().min(10).required(),
  AUTH_RESEND_TOKEN_SECRET: Joi.string().min(10).required(),
  AUTH_RESEND_TOKEN_EXPIRATION: Joi.string().min(2).required(),
  RESEND_FROM_SUBJECT: Joi.string().min(2).required(),
  RESEND_FROM_EMAIL: Joi.string().min(4).required(),
  WEB_APP_ORIGIN: Joi.string().uri().required(),
}).required();
