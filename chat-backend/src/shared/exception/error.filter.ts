import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
   catch(exception: any, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

      response.status(status).json({
         statusCode: status,
         message: exception.message || 'Internal server error',
         timestamp: new Date().toISOString(),
         path: request.url,
      });
   }
}

// catch everything
// @Catch()
// export class AllExceptionsFilter implements ExceptionFilter{
//    constructor(private readonly httpAdapterHost: HttpAdapterHost){}

// }
