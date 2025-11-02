import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    length: 96,
    type: 'varchar',
  })
  firstName: string;
  @Column({
    nullable: false,
    length: 96,
    type: 'varchar',
  })
  lastName: string;
  @Column({
    nullable: true,
    length: 96,
    type: 'varchar',
    unique: true,
  })
  email: string;
  @Column({
    nullable: true,
    length: 96,
    type: 'varchar',
  })
  password: string;
}
