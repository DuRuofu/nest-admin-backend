import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';
import 'winston-daily-rotate-file'

import winstonLogger from './config/winston.config';
import swaggerOptions from './config/swagger.config';
import { HttpExceptionFilter } from './filters/http-exception.filter';
async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonLogger),
  });

  app.useGlobalPipes(new ValidationPipe());

  // 配置swagger
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api-docs', app, document);

  // 配置全局异常过滤器(只能有1个)
  app.useGlobalFilters(new HttpExceptionFilter(winstonLogger));

  await app.listen(process.env.SERVER_PORT_HTTP ?? 3000);
  console.log(`Application is running on: http://${process.env.PROJECT_DOMAIN}:${ process.env.SERVER_PORT_HTTP }`);
  console.log(`Swagger is running on: http://${process.env.PROJECT_DOMAIN}:${process.env.SERVER_PORT_HTTP}/api-docs`);
}

bootstrap();
