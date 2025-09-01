import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthServiceController } from './prviders/auth-service.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthServiceController],
  imports: [forwardRef(() => UsersModule)],
  exports: [AuthServiceController],
})
export class AuthModule {}
