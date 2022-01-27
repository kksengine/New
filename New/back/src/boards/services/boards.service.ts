import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from '../dto/board.dto';

@Injectable()
export class BoardsService {
  create(createBoardDto: CreateBoardDto) {
    return 'This action adds a new board';
  }

  test() {
    return 'hello !';
  }
  findAll() {
    return `This action returns all boards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
