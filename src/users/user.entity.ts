import { Post } from 'src/posts/posts.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
