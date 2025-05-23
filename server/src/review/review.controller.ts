import { Review } from './review.entity';
import { ReviewService } from './review.service';
import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  Req,
} from '@nestjs/common';

@Controller()
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  save(@Body() reviews: Review[]) {
    return this.reviewService.save(reviews);
  }

  @Get('/:id')
  findAll(
    @Param('id') id: string,
    @Query('pageNum') pageNum: string,
    @Req() req: Request,
  ) {
    return this.reviewService.findAll(+pageNum, +id, req);
  }

  @Get('/user/:id')
  findWithUser(
    @Param('id') id: string,
    @Query('pageNum') pageNum: string,
    @Req() req: Request,
  ) {
    return this.reviewService.findAll(+pageNum, +id, req);
  }

  @Delete(':id')
  remove(@Param() id) {
    return this.reviewService.remove(id);
  }
}
