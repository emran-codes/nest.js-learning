import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTagDto } from 'src/tags/dtos/create-tag-dto';
import { Tag } from 'src/tags/tag.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
  ) {}
  public async create(createTagDto: CreateTagDto) {
    const newTag = this.tagsRepository.create(createTagDto);
    return await this.tagsRepository.save(newTag);
  }

  public async findMultipleTags(tags: number[]) {
    return await this.tagsRepository.find({
      where: {
        id: In(tags),
      },
    });
  }
  public async delete(id: number) {
    return await this.tagsRepository.delete(id);
  }
  public async softDelete(id: number) {
    return await this.tagsRepository.softDelete(id);
  }
}
