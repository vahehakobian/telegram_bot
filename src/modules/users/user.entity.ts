import { GenderEnum } from '../../enums/gender.enum';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamp without time zone',
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp without time zone',
    name: 'updated_at',
  })
  updatedAt: Date;
  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  gender: GenderEnum;

  @Column()
  height?: string;

  @Column()
  weight?: string;

  @Column()
  photoes: string;

  @Column()
  occupation?: string;

  @Column()
  hobbies: string;

  @Column()
  location?: string;

  @Column()
  zodiac_sign?: string;

  @Column()
  description: string;
}
