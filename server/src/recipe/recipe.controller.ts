import { Recipe } from './recipe.entity';
import { RecipeService } from './recipe.service';
import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';

@Controller()
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  save(@Body() recipe: Recipe) {
    return this.recipeService.save(recipe);
  }
  @Get()
  findAll() {
    return this.recipeService.findAll();
  }
  @Delete(':id')
  remove(@Param() id) {
    return this.recipeService.remove(id);
  }
}