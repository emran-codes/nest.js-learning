import {
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Param,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('/users')
export class UsersController {
  @Get('/:id{/:optional}')
  public getUsers(
    @Param() params: any,
    @Param('id') id: any,
    @Query('limit') limit: any,
    @Query() query: any,
  ) {
    console.log(params, query, id, limit);
    return 'user api route!';
  }
  @Post()
  public postUser(@Req() request: any, @Headers() header: any, @Ip() ip: any) {
    console.log(request, header, ip);
    return 'User has been created successfully!dfdf';
  }
}
