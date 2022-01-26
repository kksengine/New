import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { UserRepo } from './dao/user.dao';
import { RegisterSuccessReturn } from 'types';

@Injectable()
export class UsersService {
  private logger: Logger = new Logger(UsersService.name);

  constructor(private readonly userRepository: UserRepo) {}

  /**
   * @author 2022.1.27 Joo
   *
   * @param createUserDto (email, password)
   *
   * @description
   *    create 함수 안에서는 유저에게 입력 받은 비밀번호를 해싱 하는 기능을 한다.
   * @returns
   */
  async hashingPassword(
    createUserDto: CreateUserDto,
  ): Promise<RegisterSuccessReturn> {
    const { email, password } = createUserDto;
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    const salt = await bcrypt.genSalt();
    createUserDto.password = salt;
    return this.userRepository.createUser(createUserDto);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
