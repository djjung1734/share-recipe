import { Recipe } from './recipe.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository, FindOneOptions } from 'typeorm';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>,
  ) {}

  save(recipe: Recipe) {
    return this.recipeRepository.save(recipe);
  }

  findAll(options?: FindManyOptions<Recipe>) {
    return this.recipeRepository.find(options);
  }

  findOne(options?: FindOneOptions<Recipe>) {
    return this.recipeRepository.findOne(options);
  }

  update(id: number, recipe: Recipe) {
    return this.recipeRepository.save(recipe);
  }

  remove(id) {
    return this.recipeRepository.delete(id);
  }
}
