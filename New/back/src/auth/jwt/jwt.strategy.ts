import { User } from './../../users/entities/user.entity';
import { UserRepo } from './../../users/dao/user.dao';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { LoginData } from 'types';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorCodes } from 'consts';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private logger = new Logger(JwtStrategy.name);
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
  }

  async validate(loginData: LoginData) {
    const user = await this.userRepository.findOne({ email: loginData.email });
    user.password = undefined;
    if (user) {
      return user;
    } else {
      this.logger.error(`validation failed(${ErrorCodes.ERROR_RETURN})`);
      throw new UnauthorizedException('validate function error');
    }
  }
}
