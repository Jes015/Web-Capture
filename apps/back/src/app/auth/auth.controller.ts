import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './decorators';
import { SignInDto, SignUpDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
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
