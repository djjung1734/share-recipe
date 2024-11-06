import { Ingredient } from './ingredient.entity';
import { IngredientService } from './ingredient.service';
import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';

@Controller()
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Post()
  save(@Body() ingredients: Ingredient[]) {
    return this.ingredientService.save(ingredients);
  }
  @Get()
  findAll() {
    return this.ingredientService.findAll();
  }
  @Delete(':id')
  remove(@Param() id) {
    return this.ingredientService.remove(id);
  }
}
