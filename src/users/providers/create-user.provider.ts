import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { User } from '../user.entity';
import { CreateUserDto } from '../dtos/createUser.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HashingProvider } from 'src/auth/providers/hashing.provider';

@Injectable()
export class CreateUserProvider {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
  ) {}
  public async createUser(createUserDto: CreateUserDto) {
    let user: User | null = null;
    try {
      user = await this.userRepository.findOne({
        where: {
          email: createUserDto.email,
        },
      });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request as the moment please try again later.',
        {
          description: 'Error connecting to the database',
          cause: error,
        },
      );
    }
    if (user) {
      throw new BadRequestException('User already exists');
    }
    let newUser = this.userRepository.create({
      ...createUserDto,
      password: await this.hashingProvider.hashPassword(
        createUserDto?.password,
      ),
    });
    try {
      newUser = await this.userRepository.save(newUser);
      return newUser;
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
}
