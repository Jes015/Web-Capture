import { HttpException, HttpStatus } from '@nestjs/common';

export class BadCredentialsException extends HttpException {
  constructor(error?: string) {
    super(error ?? 'Bad credentials', HttpStatus.UNAUTHORIZED);
  }
}
