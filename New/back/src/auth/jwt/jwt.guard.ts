import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * @author Pito 2021.08.03
 * @description
 *      JwtAuthGuard의 기능을 함
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
