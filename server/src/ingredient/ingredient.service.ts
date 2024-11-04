import { Ingredient } from './ingredient.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  save(ingredient: Ingredient) {
    return this.ingredientRepository.save(ingredient);
  }

  findAll() {
    return this.ingredientRepository.find();
  }

  findOne(options?: FindManyOptions<Ingredient>) {
    return this.ingredientRepository.findOne(options);
  }

  update(id: number, ingredient: Ingredient) {
    return this.ingredientRepository.save(ingredient);
  }

  remove(id) {
    return this.ingredientRepository.delete(id);
  }
}
