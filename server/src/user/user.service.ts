import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  save(user: User) {
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(options?: FindOneOptions<User>) {
    return this.userRepository.findOne(options);
  }

  update(id: number, user: User) {
    return this.userRepository.save(user);
  }

  getColumns() {
    return this.userRepository.metadata.columns.map(
      (column) => column.propertyName as keyof User,
    );
  }
}
