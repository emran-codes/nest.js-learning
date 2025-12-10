import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthServiceController } from './providers/auth-service.controller';
import { SignInDto } from './dtos/signIn.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthServiceController) {}

  @Get()
  public auhtTest() {
    //   console.log('emran');
    //   return this.authService.signIn();
    console.log('GET________________GET____________');
  }
  @Post()
  @HttpCode(HttpStatus.OK)
  public async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
    // console.log('POST________________POST____________');
  }
}
