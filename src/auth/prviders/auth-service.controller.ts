import { Controller, forwardRef, Inject } from '@nestjs/common';
import { UserServices } from 'src/users/providers/user.services';

@Controller('auth-service')
export class AuthServiceController {
  constructor(
    @Inject(forwardRef(() => UserServices))
    private readonly userService: UserServices,
  ) {}
  public login(email?: string, password?: string, id?: string) {
    const user = this.userService.findUserById('12');
    console.log(user);
    return user;
  }

  public isAuth() {
    return true;
  }
}
