import { RouterModule, Routes } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: '/',
    children: [
      {
        path: '/auth',
        module: AuthModule,
      },
      {
        path: '/user',
        module: UserModule,
      },
    ],
  },
];

@Module({
  imports: [RouterModule.register(routes), AuthModule, UserModule],
})
export class ShareRecipeModule {}
