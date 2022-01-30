import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  /**
   * @author 2022.1.28 Joo
   *
   * @description
   *      참조: https://docs.nestjs.com/faq/request-lifecycle
   *      interceptor(pre-controller, post-controller)
   *      Request -> MiddLoginInfoleware -> Guard -> Interceptor
   *      요청이 들어오면 위의 순대로 작동을 한다.
   *
   * @param context
   * @param next
   * @returns
   *      success: true,
   *      data (data: {result : {"success": true, "email": "email@email.com", "statusCode": number}})
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
      })),
    );
  }
}
