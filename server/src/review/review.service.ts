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

  findAll() {
    return this.reviewRepository.find();
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
