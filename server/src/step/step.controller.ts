import { Step } from './step.entity';
import { StepService } from './step.service';
import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';

@Controller()
export class StepController {
  constructor(private readonly stepService: StepService) {}

  @Post()
  save(@Body() step: Step) {
    return this.stepService.save(step);
  }
  @Get()
  findAll() {
    return this.stepService.findAll();
  }
  @Delete(':id')
  remove(@Param() id) {
    return this.stepService.remove(id);
  }
}
