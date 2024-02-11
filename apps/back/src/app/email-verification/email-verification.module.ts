import { Module, forwardRef } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResendModule } from 'nestjs-resend';
import { AuthModule } from '../auth/auth.module';
import { EmailVerificationController } from './email-verification.controller';
import { EmailVerificationService } from './email-verification.service';
import { UnverifiedEmail } from './entities/unverified-email.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UnverifiedEmail]),
    ResendModule.forAsyncRoot({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          apiKey: configService.get('AUTH_RESEND_API_KEY'),
        };
      },
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        const secret = configService.get<string>('AUTH_RESEND_TOKEN_SECRET');
        const tokenDuration = configService.get<string>(
          'AUTH_RESEND_TOKEN_EXPIRATION',
        );

        return {
          secret,
          signOptions: {
            expiresIn: tokenDuration,
          },
        };
      },
    }),
    forwardRef(() => AuthModule),
  ],
  controllers: [EmailVerificationController],
  providers: [EmailVerificationService],
  exports: [EmailVerificationService],
})
export class EmailVerificationModule {}
