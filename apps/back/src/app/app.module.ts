import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerGuard, ThrottlerModule, seconds } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchemaEnv } from '../config';
import { AuthModule } from './auth/auth.module';
import { EmailVerificationModule } from './email-verification/email-verification.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: SchemaEnv,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    EmailVerificationModule,
    ScheduleModule.forRoot(),
    ThrottlerModule.forRoot([
      {
        ttl: seconds(1),
        limit: 1,
      },
    ]),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
