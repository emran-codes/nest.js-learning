import { Injectable } from '@nestjs/common';
import { UserServices } from 'src/users/providers/user.services';
// import { PostEntity } from '../post.entity';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class PostsService {
  constructor(
    private readonly userService: UserServices,
    // @InjectRepository(PostEntity)
    // private readonly postRepository: Repository<PostEntity>,
  ) {}
  findAll(userId: string) {
    const user = this.userService.findUserById(userId);
    return [{ user, title: 'help me', description: 'this is hte psot' }];
  }
  createPost(post: any) {
    // let newPost = this.postRepository.create(post);
    // newPost = await this.postRepository.save(newPost);
    return 'newPost';
  }
}
