import { Body, Controller, Get } from '@nestjs/common';
import { SignUpDto } from '../auth/dto';
import { EmailVerificationService } from './email-verification.service';

@Controller('email-verification')
export class EmailVerificationController {
  constructor(
    private readonly emailVerificationService: EmailVerificationService,
  ) {}

  @Get()
  verifyEmail(@Body() emailToken: SignUpDto) {
    return this.emailVerificationService.verifyEmail(emailToken);
  }
}
