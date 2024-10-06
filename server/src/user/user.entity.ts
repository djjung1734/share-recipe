import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  id: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @Column()
  image: string;

  @Column()
  image_path: string;
}
