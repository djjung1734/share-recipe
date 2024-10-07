import { Ingredient } from './ingredient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient])],
  controllers: [],
  providers: [],
})
export class AppModule {}
