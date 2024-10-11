import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Controller, Post, Request, UseGuards } from '@nestjs/common';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('refresh')
  async refreshToken(@Request() req) {
    const token = req.headers.authorization.replace('Bearer', '');
    return this.authService.refreshToken(token);
  }
}
