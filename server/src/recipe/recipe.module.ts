import { Recipe } from './recipe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  controllers: [],
  providers: [],
})
export class AppModule {}
