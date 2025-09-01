import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserServices } from './providers/user.services';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UserServices],
  exports: [UserServices],
  imports: [forwardRef(() => AuthModule)],
})
export class UsersModule {}
