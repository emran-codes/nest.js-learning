import {
  Body,
  Controller,
  // DefaultValuePipe,
  // Delete,
  Get,
  // Param,
  // ParseIntPipe,
  Patch,
  Post,
  // Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
// import { UserParam } from './dtos/getUserParam.dto';
import { PatchUserDto } from './dtos/patchUser.dto';
import { UserServices } from './providers/user.services';

@Controller('/users')
export class UsersController {
  constructor(private readonly userService: UserServices) {}
  @Get('{/:id}')
  public getUsers() {
    return this.userService.getAllUsers();
  }
  @Post()
  public async postUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }
  @Patch('{/:id}')
  public patchUser(@Body() createUserDto: PatchUserDto) {
    console.log(createUserDto);
    return 'User has been created successfully!dfdf';
  }
}
