import { Injectable } from '@nestjs/common';
import { MetaOptions } from '../meta-option.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaOptions)
    private metaOptionsRepository: Repository<MetaOptions>,
  ) {}
  public async create(createPostMetaOptions: CreatePostMetaOptionsDto) {
    console.log('HEEEE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    const metaOption = this.metaOptionsRepository.create(createPostMetaOptions);
    return await this.metaOptionsRepository.save(metaOption);
  }
}
