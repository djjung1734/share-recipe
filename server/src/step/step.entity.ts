import { Recipe } from './../recipe/recipe.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('step')
export class Step {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('longtext')
  content: string;

  @Column()
  image: string;

  @Column()
  imagePath: string;

  @Column({ type: 'bigint' })
  recipeId?: number;

  @ManyToOne(() => Recipe, (recipe) => recipe.steps, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  recipe: Recipe;
}
