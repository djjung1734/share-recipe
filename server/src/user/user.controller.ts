import { User } from './user.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async saveUser(@Body() user: User) {
    const hashedPassword = await bcrypt.hash(user.password, 8);
    const hashedUser = {
      ...user,
      password: hashedPassword,
    };

    try {
      return await this.userService.save(hashedUser);
    } catch (error) {
      console.log('error', error);
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Existing username.');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
