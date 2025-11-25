import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CreateTagDto } from './dtos/create-tag-dto';
import { TagsService } from './provider/tags/tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}
  @Post()
  public async create(@Body() createTagDto: CreateTagDto) {
    return await this.tagsService.create(createTagDto);
  }
  @Delete('/:id')
  public async delete(@Param('id') id: number) {
    console.log('sk;fjsdkf');
    return await this.tagsService.delete(id);
  }

  @Delete('/:id/soft')
  public async softDelete(@Param('id') id: number) {
    console.log('sk;fjsdkf');
    return await this.tagsService.softDelete(id);
  }
}
