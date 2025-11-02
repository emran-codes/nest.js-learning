import { forwardRef, Inject, Injectable } from '@nestjs/common';
// import { UserParam } from '../dtos/getUserParam.dto';
import { AuthServiceController } from 'src/auth/prviders/auth-service.controller';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/createUser.dto';
@Injectable()
export class UserServices {
  constructor(
    @Inject(forwardRef(() => AuthServiceController))
    private readonly authService: AuthServiceController,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  getAllUsers = () => {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    return [
      { email: 'emran@gmail.com', name: 'emran' },
      { email: 'mobbin@gmail.com', name: 'mobbin' },
      { email: 'mustafa@gmail.com', name: 'mustafa' },
    ];
  };
  findUserById = (id: string) => {
    return { userId: id, email: 'emran@gmail.com', name: 'emran' };
  };
  public async createUser(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });
    if (user) {
      throw new Error('User already exists');
    }
    let newUser = this.userRepository.create(createUserDto);
    newUser = await this.userRepository.save(newUser);
    return newUser;
  }
}
