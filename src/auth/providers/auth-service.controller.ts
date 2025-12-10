import {
  Controller,
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { UserServices } from 'src/users/providers/user.services';
import { SignInDto } from '../dtos/signIn.dto';
import { HashingProvider } from './hashing.provider';
import { SignInProvider } from './sign-in.provider';

@Controller('auth-service')
export class AuthServiceController {
  constructor(
    @Inject(forwardRef(() => UserServices))
    private readonly userService: UserServices,
    private readonly hashingProvider: HashingProvider,
    private readonly signInProvider: SignInProvider,
  ) {}
  public async signIn(signInDto: SignInDto) {
    return this.signInProvider.signIn(signInDto);
  }

  public isAuth() {
    return true;
  }
}
