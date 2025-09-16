import { Controller, Get } from '@nestjs/common';
import { AuthServiceController } from './prviders/auth-service.controller';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthServiceController) {}

  @Get()
  public auhtTest() {
    console.log('emran');
    return this.authService.login();
  }
}
