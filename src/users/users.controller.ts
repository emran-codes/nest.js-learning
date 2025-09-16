import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
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
import { UserServices } from './providers/user.services';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly userService: UserServices) {}
  @Get('{/:id}')
  @ApiResponse({
    status: 200,
    description: 'User fetched successfuly based on query',
  })
  @ApiOperation({
    summary: 'hello this is the get users and get user api',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    example: 10,
    description: 'heelo this is the limit field',
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    example: 1,
    description: 'heelo this is the page field',
  })
  public getUsers(
    @Param() params: UserParam,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.userService.getAllUsers(params, limit, page);
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
