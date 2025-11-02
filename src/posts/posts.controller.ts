import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './services/posts.service';
// import { PostEntity } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postServices: PostsService) {}
  @Get('{/:userId}')
  getAllPosts(@Param('userId') userId: string) {
    return this.postServices.findAll(userId);
  }
  @Post()
  createPost(@Body() post: any) {
    return this.postServices.createPost(post);
  }
}
