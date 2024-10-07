import { Step } from './step.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Step])],
  controllers: [],
  providers: [],
})
export class AppModule {}
