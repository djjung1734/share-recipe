import { Step } from './step.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class StepService {
  constructor(
    @InjectRepository(Step) private stepRepository: Repository<Step>,
  ) {}

  save(steps: Step[]) {
    return this.stepRepository.save(steps);
  }

  findAll() {
    return this.stepRepository.find();
  }

  findOne(options?: FindManyOptions<Step>) {
    return this.stepRepository.findOne(options);
  }

  update(id: number, step: Step) {
    return this.stepRepository.save(step);
  }

  remove(id) {
    return this.stepRepository.delete(id);
  }
}
