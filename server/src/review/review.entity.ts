import { User } from './../user/user.entity';
import { Recipe } from './../recipe/recipe.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('review')
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: number;

  @Column('longtext')
  content: string;

  @Column()
  image: string;

  @Column()
  imagePath: string;

  @Column({ type: 'bigint' })
  userId?: number;

  @Column({ type: 'bigint' })
  recipeId?: number;

  @ManyToOne(() => User, (user) => user.reviews, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Recipe, (recipe) => recipe.reviews, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  recipe: Recipe;
}
