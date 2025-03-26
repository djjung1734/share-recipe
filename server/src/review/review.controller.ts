import { Review } from './review.entity';
import { ReviewService } from './review.service';
import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';

@Controller()
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  save(@Body() reviews: Review[]) {
    return this.reviewService.save(reviews);
  }
  @Get('/:id')
  findAll(@Param('id') id: string) {
    return this.reviewService.findAll({
      where: { recipeId: +id },
      relations: ['user'],
    });
  }
  @Delete(':id')
  remove(@Param() id) {
    return this.reviewService.remove(id);
  }
}
