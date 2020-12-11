import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  catName: string;

  @Column()
  catAge: string;

  @Column()
   catSkin: boolean;
}