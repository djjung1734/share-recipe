import { IngredientModule } from './ingredient/ingredient.module';
import { StepModule } from './step/step.module';
import { RecipeModule } from './recipe/recipe.module';
import { UploadModule } from './upload/upload.module';
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
      {
        path: '/upload',
        module: UploadModule,
      },
      {
        path: '/recipe',
        module: RecipeModule,
      },
      {
        path: '/ingredient',
        module: IngredientModule,
      },
      {
        path: '/step',
        module: StepModule,
      },
    ],
  },
];

@Module({
  imports: [
    RouterModule.register(routes),
    AuthModule,
    UserModule,
    UploadModule,
    RecipeModule,
    IngredientModule,
    StepModule,
  ],
})
export class ShareRecipeModule {}
