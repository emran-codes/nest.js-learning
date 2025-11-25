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
  getAllUsers = async () => {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    const user = await this.userRepository.find();

    return user;
  };
  public findUserById = async (id: number) => {
    const user = await this.userRepository.findOneBy({ id: Number(id) });
    return { userId: user };
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
