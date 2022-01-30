import { IsEmail } from 'class-validator';
import { LoginData } from './../../types';
import { SuccessInterceptor } from '../common/interceptors/success.interceptor';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  HttpException,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CreateUserDto } from './dto/user.dto';
import { RegisterSuccessReturn } from '../../types';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { FileInterceptor } from '@nestjs/platform-express';
import { LoginInterceptor } from 'src/common/interceptors/login.interceptor';

@Controller('users')
@UseInterceptors(SuccessInterceptor, FileInterceptor)
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<RegisterSuccessReturn> {
    return this.usersService.hashingPassword(createUserDto);
  }

  @Post('/login')
  async loginController(@Body() loginData: LoginData): Promise<any> {
    return this.usersService.login(loginData);
  }

  @Get()
  test() {
    return { cats: ' get API !' };
  }

  @Get('/:id')
  findAll(@Param('id', ParseIntPipe) params: number) {
    console.log(params);
    // throw new HttpException('api broken', 401);
    return this.usersService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
