import { Board } from './../../boards/entities/board.entity';
import { IsEmail, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false, type: 'varchar' })
  @IsEmail()
  email: string;

  @Column({ type: 'varchar', nullable: false })
  @IsString()
  password: string;

  @CreateDateColumn()
  createAt!: Date;

  @OneToMany(() => Board, (board) => board.user)
  board: Board[];
}
