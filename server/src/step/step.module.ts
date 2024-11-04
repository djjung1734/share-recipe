import { StepService } from './step.service';
import { StepController } from './step.controller';
import { Step } from './step.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Step])],
  controllers: [StepController],
  providers: [StepService],
  exports: [StepService],
})
export class StepModule {}
