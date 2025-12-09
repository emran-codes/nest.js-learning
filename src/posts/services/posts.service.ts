import {
  BadRequestException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { UserServices } from 'src/users/providers/user.services';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../posts.entity';
import { MetaOptions } from 'src/meta-options/meta-option.entity';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Tag } from 'src/tags/tag.entity';
import { TagsService } from 'src/tags/provider/tags/tags.service';
import { PatchPostDto } from '../dtos/patch-post.dto';
import { GetPostsDto } from '../dtos/get-post.dto';
import { PaginationProvider } from 'src/common/pagination/provider/pagination.provider';
import { Paginated } from 'src/common/pagination/interface/paginated.interface';
@Injectable()
export class PostsService {
  constructor(
    private readonly userService: UserServices,
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,

    @InjectRepository(MetaOptions)
    private readonly metaOptionsRepository: Repository<MetaOptions>,
    private readonly tagService: TagsService,
    private readonly paginationProvider: PaginationProvider,
  ) {}
  findAll(getPostsDto: GetPostsDto, userId: string): Promise<Paginated<Post>> {
    // return this.postRepository.find({
    //   take: getPostsDto.limit,
    //   skip: (getPostsDto.page - 1) * getPostsDto.limit,
    // });
    return this.paginationProvider.paginateQuery(
      {
        page: getPostsDto.page,
        limit: getPostsDto.limit,
      },
      this.postRepository,
    );
  }
  async create(createPostDto: CreatePostDto) {
    console.log(
      '__________________$$$$$$$$$$$$$$$$$$$$$$$$_______________________',
    );
    const user = await this.userService.findUserById(createPostDto.authorId);
    const tags = await this.tagService.findMultipleTags(createPostDto.tags);
    const newPost = this.postRepository.create({
      ...createPostDto,
      author: user?.userId,
      tags: tags,
    } as DeepPartial<Post>);
    console.log(newPost);
    console.log(
      '__________________$$$$$$$$$$$$$$$$$$$$$$$$_______________________',
    );
    return await this.postRepository.save(newPost);
    // return newPost;
  }
  public async update(patchPostDto: PatchPostDto) {
    try {
      const tags = patchPostDto.tags
        ? await this.tagService.findMultipleTags(patchPostDto.tags)
        : undefined;

      const post = await this.postRepository.findOneBy({
        id: patchPostDto?.id,
      });
      if (!post) {
        throw new BadRequestException('Post not found');
      }
      post.title = patchPostDto?.title ?? post.title;
      post.content = patchPostDto?.content ?? post.content;
      post.status = patchPostDto?.status ?? post.status;
      post.postType = patchPostDto?.postType ?? post.postType;
      post.slug = patchPostDto?.slug ?? post.slug;
      post.featuredImageUrl =
        patchPostDto?.featuredImageUrl ?? post.featuredImageUrl;
      post.publishOn = patchPostDto?.publishOn ?? post.publishOn;
      post.tags = tags;
      console.log('EKDFJKDFDK', post);
      // return 'HEELKDFJ';
      try {
        return await this.postRepository.save(post);
      } catch (error) {
        throw new RequestTimeoutException(
          'Unable to process your request as the moment please try again later.',
          {
            description: 'Error connecting to the database',
            cause: error,
          },
        );
      }
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request as the moment please try again later.',
        {
          description: 'Error connecting to the database',
          cause: error,
        },
      );
    }
  }
  public async delete(id: number) {
    // const post = await this.postRepository.findOneBy({ id })!;
    // console.log(post, post?.id, 'metaOptions', post?.metaOptions?.id, id);
    // await this.postRepository.delete(id);
    // if (post?.metaOptions?.id) {
    //   await this.metaOptionsRepository.delete(post?.metaOptions?.id);
    // }
    // const inversePost = await this.metaOptionsRepository.find({
    //   where: { id: post?.metaOptions?.id },
    //   relations: {
    //     post: true,
    //   },
    // });
    // console.log(inversePost);
    const deletedPost = await this.postRepository.delete(id);
    return { success: true, post: 'post.id', data: deletedPost };
  }
}
