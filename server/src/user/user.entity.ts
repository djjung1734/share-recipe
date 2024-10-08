import { Recipe } from './../recipe/recipe.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  imagePath: string;

  @OneToMany(() => Recipe, (recipes) => recipes.user)
  recipes: Recipe[];
}
