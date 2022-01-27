import { Controller, Get, Param, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id/:names')
  getHello(@Param() pa: { id: string; names: string }): string {
    console.log(typeof pa.id);
    console.log(typeof pa);

    return this.appService.getHello();
  }
}
