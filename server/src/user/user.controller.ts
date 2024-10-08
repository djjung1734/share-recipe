import { User } from './user.entity';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async saveUser(@Body() user: User) {
    const hashedPassword = await bcrypt.hash(user.password, 8);
    const hashedUser = {
      ...user,
      password: hashedPassword,
    };
    return this.userService.save(hashedUser);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
