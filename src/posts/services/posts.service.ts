import { Injectable } from '@nestjs/common';
import { UserServices } from 'src/users/providers/user.services';

@Injectable()
export class PostsService {
  constructor(private readonly userService: UserServices) {}
  findAll(userId: string) {
    const user = this.userService.findUserById(userId);
    return [{ user, title: 'help me', description: 'this is hte psot' }];
  }
}
