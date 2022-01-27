import { BoardsModule } from './../boards/boards.module';
import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepo } from './dao/user.dao';
import { BoardsService } from 'src/boards/services/boards.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), BoardsModule],
  controllers: [UsersController],
  providers: [UsersService, UserRepo],
})
export class UsersModule {}
