import {
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserServices } from 'src/users/providers/user.services';
import { HashingProvider } from './hashing.provider';
import { SignInDto } from '../dtos/signIn.dto';
import type { ConfigType } from '@nestjs/config';
import jwtConfig from '../config/jwt.config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SignInProvider {
  constructor(
    @Inject(forwardRef(() => UserServices))
    private readonly userService: UserServices,
    private readonly hashingProvider: HashingProvider,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {}

  public async signIn(signInDto: SignInDto) {
    const user = await this.userService.findUserByEmail(signInDto.email);
    let isEqual: boolean;
    try {
      isEqual = await this.hashingProvider.comparePassword(
        signInDto.password,
        user?.userId?.password,
      );
    } catch (error) {
      throw new RequestTimeoutException(error, {
        description: 'Could not compare password',
      });
    }
    if (!isEqual) {
      throw new UnauthorizedException('Password does not match');
    }
    const accessToken = await this.jwtService.signAsync(
      {
        sub: user.userId,
      },
      {
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        secret: this.jwtConfiguration.secret,
      },
    );
    return { accessToken: accessToken };
  }
}
