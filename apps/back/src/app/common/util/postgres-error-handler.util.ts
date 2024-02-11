import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

export const postgresErrorHandler = (error: any) => {
  console.error(error);
  const errorMessage = error?.detail ?? 'Unknown error';
  const errorClass =
    DB_ERROR_EXCEPTIONS?.[error.code] ?? InternalServerErrorException;

  throw new errorClass(errorMessage);
};

const DB_ERROR_EXCEPTIONS = {
  '23505': ConflictException,
};
