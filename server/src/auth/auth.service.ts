import { UserService } from './../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  //사용자 인증
  async validateUser(email: string, pass: string): Promise<any> {
    const select = this.userService.getColumns(); //숨겨진 필드까지 선택
    const user = await this.userService.findOne({
      select,
      where: { email },
    });
    if (user && bcrypt.compare(pass, user.password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '60s' });
    let { refreshToken } = user;
    try {
      this.jwtService.verify(refreshToken);
    } catch {
      refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
    }

    //refreshToken 저장
    user.refreshToken = refreshToken;
    this.userService.update(user.id, user);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      user,
    };
  }

  //토큰 갱신
  async refreshToken(token: string) {
    const select = this.userService.getColumns();
    const user = await this.userService.findOne({
      select,
      where: { refreshToken: token },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.login(user);
  }
}
