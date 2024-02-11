import { Module, forwardRef } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EmailVerificationModule } from '../email-verification/email-verification.module';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies';

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        const secret = configService.get<string>('AUTH_SECRET');
        const tokenDuration = configService.get<string>('AUTH_EXPIRES');

        return {
          secret,
          signOptions: {
            expiresIn: tokenDuration,
          },
        };
      },
    }),
    forwardRef(() => EmailVerificationModule),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, PassportModule, JwtModule, JwtStrategy],
})
export class AuthModule {}
