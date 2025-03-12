import { Review } from './review.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  controllers: [],
  providers: [],
  exports: [],
})
export class ReviewModule {}
