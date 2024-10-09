import { User } from './../user/user.entity';
import { UserService } from './../user/user.service';
import { AuthService } from './auth.service';
import {
  Controller,
  Body,
  Post,
  UnprocessableEntityException,
  Res,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('/login')
  async login(@Body() input: User, @Res() response: Response) {
    const { email, password } = input;

    const user = await this.userService.findOne(email);

    if (!user) {
      throw new UnprocessableEntityException('이메일이 없습니다.');
    }

    const isAuth = await bcrypt.compare(password, user.password);

    if (!isAuth) {
      throw new UnprocessableEntityException('비밀번호가 일치하지 않습니다.');
    }

    this.authService.setRefrechToken({ user, response });

    const jwt = this.authService.getAccessToken({ user });
    return response.status(200).send(jwt);
  }
}
