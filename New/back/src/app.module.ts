import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { APP_FILTER, MiddlewareBuilder } from '@nestjs/core';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(), BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
/**
 * @author 2022 .1.24 Joo
 *
 * @description
 *    미들웨어 적용: 모든 엔드포인트(endpoint)와 GET요청으로 들어올 경우
 *
 */
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.GET,
    });
  }
}
