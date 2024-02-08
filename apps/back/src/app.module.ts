import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchemaEnv } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: SchemaEnv,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
