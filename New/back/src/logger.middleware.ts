import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger: Logger = new Logger('HTTP');

  /**
   * @author 2022.1.27 Joo
   *
   * @description
   *    middelware -> 요청이 들어온 모든 엔드포인드(endpoint)의 대한 로그
   *    어떤 로그를 남기는지: ip, endpoint, method(GET)
   *
   * @param req(Request)
   * @param res(Response)
   * @param next(NextFunction)
   */
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(`${req.ip}, ${req.originalUrl} , ${req.method}`);
    res.on('finish', () => {
      this.logger.log(`${req.ip}, ${req.method}, ${res.statusCode}`);
    });
    next();
  }
}
