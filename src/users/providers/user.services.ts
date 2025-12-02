import {
  BadRequestException,
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
// import { UserParam } from '../dtos/getUserParam.dto';
import { AuthServiceController } from 'src/auth/prviders/auth-service.controller';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/createUser.dto';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UserServices {
  constructor(
    @Inject(forwardRef(() => AuthServiceController))
    private readonly authService: AuthServiceController,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly configService: ConfigService,
  ) {}
  getAllUsers = async () => {
    throw new HttpException(
      {
        status: HttpStatus.MOVED_PERMANENTLY,
        error: 'Moved Permanently',
        __filename: 'chapat.json',
        lineNumber: 10,
      },
      HttpStatus.MOVED_PERMANENTLY,
      {
        cause: new Error('Moved Permanently'),
        description: 'The resource has moved permanently to a new location.',
      },
    );
    // const s3Bucket = this.configService.get('S3_BUCKET');
    // console.log(s3Bucket);
    // // const isAuth = this.authService.isAuth();
    // const user = await this.userRepository.find();

    // return user;
  };
  public findUserById = async (id: number) => {
    let user: User | null = null;
    try {
      user = await this.userRepository.findOneBy({ id: Number(id) });
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
    let newUser = this.userRepository.create(createUserDto);
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
