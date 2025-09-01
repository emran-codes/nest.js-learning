import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './services/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postServices: PostsService) {}
  @Get('{/:userId}')
  getAllPosts(@Param('userId') userId: string) {
    return this.postServices.findAll(userId);
  }
}
