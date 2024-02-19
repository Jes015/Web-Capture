import { Body, Controller, Get, Post } from '@nestjs/common';
import { Throttle, days, hours } from '@nestjs/throttler';
import { AuthService } from './auth.service';
import { Auth } from './decorators';
import { SignInDto, SignUpDto } from './dto';

@Controller('auth')
@Throttle({ default: { limit: 5, ttl: days(1) } })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  @Throttle({ default: { limit: 20, ttl: hours(5) } })
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('signUp')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.sendUserEmailValidation(signUpDto);
  }

  @Auth('admin')
  @Get('private')
  findAll() {
    return 'private route prr';
  }
}
