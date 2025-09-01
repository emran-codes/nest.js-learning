import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserParam } from '../dtos/getUserParam.dto';
import { AuthServiceController } from 'src/auth/prviders/auth-service.controller';

@Injectable()
export class UserServices {
  constructor(
    @Inject(forwardRef(() => AuthServiceController))
    private readonly authService: AuthServiceController,
  ) {}
  getAllUsers = (params: UserParam, limit: number, page: number) => {
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
}
