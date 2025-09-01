import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserParam } from './dtos/getUserParam.dto';
import { PatchUserDto } from './dtos/patchUser.dto';

@Controller('/users')
export class UsersController {
  @Get('{/:id}')
  public getUsers(
    @Param() params: UserParam,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(
      'id',
      params,
      typeof params,
      'limit',
      limit,
      typeof limit,
      'page',
      typeof page,
      page,
    );
    return 'user api route!';
  }
  @Post()
  public postUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'User has been created successfully!dfdf';
  }
  @Patch('{/:id}')
  public patchUser(@Body() createUserDto: PatchUserDto) {
    console.log(createUserDto);
    return 'User has been created successfully!dfdf';
  }
}
