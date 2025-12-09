import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // enable auto transform
      transformOptions: {
        enableImplicitConversion: true, // <-- THIS is the key
      },
    }),
  );
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
