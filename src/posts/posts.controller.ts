import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';
import { GetPostsDto } from './dtos/get-post.dto';
// import { PostEntity } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postServices: PostsService) {}
  @Get('{/:userId}')
  getAllPosts(
    @Param('userId') userId: string,
    @Query() getPostsDto: GetPostsDto,
  ) {
    return this.postServices.findAll(getPostsDto, userId);
  }
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    return this.postServices.create(createPostDto);
  }
  @Patch()
  public updatePost(@Body() patchPostDto: PatchPostDto) {
    // return 'sfsd';
    return this.postServices.update(patchPostDto);
  }
  @Delete('/:id')
  public deletePost(@Param('id') id: number) {
    return this.postServices.delete(id);
  }
}
