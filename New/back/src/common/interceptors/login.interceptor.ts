import { Observable } from 'rxjs';
import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';

export class LoginInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(context.getArgs());
    console.log('here');

    return;
  }
}
