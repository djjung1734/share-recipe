import { Recipe } from './../recipe/recipe.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('ingredient')
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  unit: string;

  @Column({ type: 'bigint' })
  recipeId?: number;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  recipe: Recipe;
}
