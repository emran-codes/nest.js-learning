import {
  BadRequestException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindOneUserByEmailProvider {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  public findUserByEmail = async (email: string) => {
    let user: User | null = null;
    try {
      user = await this.userRepository.findOneBy({ email });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request as the moment please try again later.',
        {
          description: 'Error connecting to the database',
          cause: error,
        },
      );
    }
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return { userId: user };
  };
}
