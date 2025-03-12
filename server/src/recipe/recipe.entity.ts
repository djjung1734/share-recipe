import { Review } from './../review/review.entity';
import { Step } from './../step/step.entity';
import { Ingredient } from './../ingredient/ingredient.entity';
import { User } from './../user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('recipe')
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('longtext')
  description: string;

  @Column()
  time: string;

  @Column()
  level: string;

  @Column()
  image: string;

  @Column()
  imagePath: string;

  @Column({ type: 'bigint' })
  userId?: number;

  @ManyToOne(() => User, (user) => user.recipes, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: User;

  @OneToMany(() => Ingredient, (ingredients) => ingredients.recipe)
  ingredients: Ingredient[];

  @OneToMany(() => Step, (steps) => steps.recipe)
  steps: Step[];

  @OneToMany(() => Review, (reviews) => reviews.recipe)
  reviews: Review[];
}
