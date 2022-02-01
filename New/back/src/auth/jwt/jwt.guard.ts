import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * @author Joo 2022.2.1
 * @description
 *      JwtAuthGuard의 기능을 함
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
