import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  /**
   * @author 2022.1.28 Joo
   *
   * @description
   *      ExceptionFilter처리
   *      throw new HttpException()의 로직이 실행이 되면, 파라미터에서 넘겨진 부분이 이 곳으로 오게 된다.
   *      string일 경우와 object 2가지 경우로 나누었다.
   *      catch()는 EcptionFilter 인퍼페이스 함수이다.
   * @param exception(HttpException)
   *
   * @param host
   */
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx: HttpArgumentsHost = host.switchToHttp();
    const response: Response<
      any,
      Record<string, any>
    > = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status: number = exception.getStatus();
    const error: string | object = exception.getResponse() as
      | string
      | {
          statusCode: number;
          message: string | string[];
          error: string;
        };

    if (typeof error === 'string') {
      response.status(status).json({
        success: false,
        timestamp: new Date().toISOString(),
        path: request.url,
        error,
      });
    } else {
      response.status(status).json({
        success: false,
        timestamp: new Date().toISOString(),
        path: request.url,
        ...error,
      });
    }
  }
}
