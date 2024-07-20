import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from "@nestjs/config";
import { JwtGuard } from './auth/guards/jwt.guard';
//import rTracer from 'cls-rtracer';
//import {JwtService} from "@nestjs/jwt";
import { json } from 'express';
import dotenv from 'dotenv';

async function bootstrap() {
 // dotenv.config();
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');
 // const reflector = app.get(Reflector)
  const configService = app.get<ConfigService>(ConfigService)
 // const jwtService = app.get<JwtService>(JwtService)

  app.useGlobalGuards(new JwtGuard(app.get(Reflector)));

  const servicePort = configService.get<string>('PORT') || 3000;
 // const hostAddress = configService.get<string>('HOST') || '127.0.0.1';

 // app.use(json({ limit: '120mb' }));
  //app.use(rTracer.expressMiddleware({ useHeader: true, echoHeader: true }));

  await app.listen(servicePort);
}
bootstrap();
