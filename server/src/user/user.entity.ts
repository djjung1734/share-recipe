import { Recipe } from './../recipe/recipe.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column()
  nickname: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  imagePath: string;

  @Column({ select: false, nullable: true })
  refreshToken?: string;

  @OneToMany(() => Recipe, (recipes) => recipes.user, { cascade: true })
  recipes: Recipe[];
}
