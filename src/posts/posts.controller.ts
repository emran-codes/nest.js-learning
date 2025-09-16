import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/createPostDto';
import { PatchPostDto } from './dtos/patch.post.dto';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postServices: PostsService) {}
  @Get('{/:userId}')
  getAllPosts(@Param('userId') userId: string) {
    return this.postServices.findAll(userId);
  }
  @Post()
  createPost(@Body() post: CreatePostDto) {
    // return this.postServices.create(post);
    return 'this is create post api';
  }

  @ApiOperation({
    summary: 'Updates and existing blog post in the database.',
  })
  @ApiResponse({
    status: 200,
    description:
      'You get a success 20o response if the post is updated successfully',
  })
  @Patch()
  public updatePost(@Body() patchPostsDto: PatchPostDto) {
    console.log(patchPostsDto);
    return 'workds!';
  }
}
