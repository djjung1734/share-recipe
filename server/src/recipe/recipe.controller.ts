import { Recipe } from './recipe.entity';
import { RecipeService } from './recipe.service';
import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';

@Controller()
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  save(@Body() recipe: Recipe) {
    return this.recipeService.save(recipe);
  }
  @Get()
  findAll(
    @Query('pageNum') pageNum: string,
    @Query('keyword') keyword: string,
  ) {
    return this.recipeService.findAll(+pageNum, keyword);
  }
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.recipeService.findOne({
      where: { id: +id },
      relations: ['ingredients', 'steps', 'user'],
    });
  }
  @Get('/user/:id')
  findWithUser(@Param('id') id: string, @Query('pageNum') pageNum: string) {
    return this.recipeService.findAllForUser(+pageNum, +id);
  }
  @Delete(':id')
  remove(@Param() id) {
    return this.recipeService.remove(id);
  }
}
