import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from '@/shared/exception/error.filter';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);

   // documentation with swagger
   const config = new DocumentBuilder().setTitle('API').addTag('users').build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('/', app, document);

   // validation middleware
   app.useGlobalPipes(
      new ValidationPipe({
         whitelist: true,
         forbidNonWhitelisted: true,
         transform: true,
      }),
   );

   // logger middleware
   const logger = new Logger();
   app.useLogger(logger);

   // exception filter
   app.useGlobalFilters(new HttpExceptionFilter());

   // server listening
   const port = process.env.PORT ?? 3000;
   await app.listen(port).then(() => {
      logger.log(`Server listening on port : ${port}`, 'Botstrap');
   });
}
bootstrap();
