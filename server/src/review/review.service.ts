import { Review } from './review.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private reviewRepository: Repository<Review>,
  ) {}

  save(reviews: Review[]) {
    return this.reviewRepository.save(reviews);
  }

  async findAll(pageNum: number, id?: number, req?: Request) {
    const relationCondition = req.url.includes('/user') ? ['recipe'] : ['user'];
    const limit = req.url.includes('/user') ? 5 : 3;
    const [data, total] = await this.reviewRepository.findAndCount({
      where: { recipeId: +id },
      relations: relationCondition,
      skip: limit * (pageNum - 1),
      take: limit,
    });
    return { data, total, pageNum, lastPage: Math.ceil(total / limit) };
  }

  findOne(options?: FindManyOptions<Review>) {
    return this.reviewRepository.findOne(options);
  }

  update(id: number, review: Review) {
    return this.reviewRepository.save(review);
  }

  remove(id) {
    return this.reviewRepository.delete(id);
  }
}
