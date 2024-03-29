import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      allowedHeaders: ['Content-Type'],
      origin: [process.env.WEB_APP_ORIGIN],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
  });

  app.use(helmet());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
