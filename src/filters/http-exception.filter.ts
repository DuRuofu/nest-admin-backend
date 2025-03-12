import { ArgumentsHost, Catch, ExceptionFilter, HttpException, LoggerService } from "@nestjs/common";
import { Request, Response } from "express";

@Catch() // 捕获所有异常
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggerService) {}

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const status = exception instanceof HttpException ? exception.getStatus() : 500;
    const errorResponse = exception.getResponse?.();
    
    // 统一错误信息格式
    const message = (typeof errorResponse === 'object' && errorResponse?.message) 
      ? errorResponse.message 
      : exception.message || "服务器内部错误";

    // 记录详细日志
    this.logger.error(
      `【${request.method}】${request.url}`,
      {
        status,
        message,
        stack: exception.stack,
        params: request.params,
        query: request.query,
        body: request.body,
      }
    );

    response.status(status).json({
      code: status,
      message,
      data: {},
      // timestamp: new Date().toISOString(),
      // path: request.url,
    });
  }
}
