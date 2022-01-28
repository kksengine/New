import {
  BadRequestException,
  HttpException,
  Injectable,
  Logger,
  UseFilters,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/user.dto';
import { User } from '../entities/user.entity';
import { RegisterSuccessReturn } from '../../../types';
import { HttpExceptionFilter } from '../../exceptions/http-exception.filter';

@Injectable()
export class UserRepo {
  private logger: Logger = new Logger(UserRepo.name);

  constructor(
    @InjectRepository(User)
    private userDAO: Repository<User>,
  ) {}

  /**
   * @author 2022.1.27 Joo
   *
   * @param createUserDto (email, password)
   *
   * @description
   *        createUser함수는 controller -> service -> DAO에서 넘어 온 데이터를 저장 하는 기능을 한다.
   *        회원가입 로직이고, 함수 안에 result 변수의 자료형이 명시가 되어 있지 않은데, 해당 변수의 자료형은 RegisterSuccessReturn 이다.
   *
   * @returns
   *        RegisterSuccessReturn
   *        RegisterSuccessReturn의 자료형은 types.ts에 기재 해놨음
   *        result객체 안에 success, email, statusCode 있음
   *        예외시, exceptions/http-exception.filter.ts의
   *        catch로 {statusCode, message, error}를 넘겨줌.
   *
   */

  @UseFilters(HttpExceptionFilter)
  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<RegisterSuccessReturn> {
    const { email, password } = createUserDto;
    try {
      await this.userDAO
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          email,
          password,
        })
        .execute();
      this.logger.log('insert success');
      const result = {
        success: true,
        email,
        statusCode: 201,
      };
      return { result };
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(
        {
          statusCode: 400,
          message: '안됨',
          error: 'not founding',
        },
        401,
      );
    }
  }
}
