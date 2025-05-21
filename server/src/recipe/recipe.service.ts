import { Recipe } from './recipe.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>,
  ) {}

  save(recipe: Recipe) {
    return this.recipeRepository.save(recipe);
  }

  async findAll(pageNum: number, id?: number) {
    const whereCondition = id ? { userId: +id } : {};
    const limit = 10;
    const [data, total] = await this.recipeRepository.findAndCount({
      where: whereCondition,
      relations: ['ingredients', 'steps', 'user'],
      skip: limit * (pageNum - 1),
      take: limit,
    });
    return { data, total, pageNum, lastPage: Math.ceil(total / limit) };
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
