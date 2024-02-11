import { Controller, Get, Param } from '@nestjs/common';
import { EmailVerificationService } from './email-verification.service';

@Controller('email-verification')
export class EmailVerificationController {
  constructor(
    private readonly emailVerificationService: EmailVerificationService,
  ) {}

  @Get(':verificationToken')
  verifyEmail(@Param('verificationToken') verificationToken: string) {
    return this.emailVerificationService.verifyAndSignUpEmail(
      verificationToken,
    );
  }
}
