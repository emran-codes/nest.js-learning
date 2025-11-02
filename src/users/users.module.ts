import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserServices } from './providers/user.services';
import { AuthModule } from 'src/auth/auth.module';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UsersController],
  providers: [UserServices],
  exports: [UserServices],
  imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([User])],
})
export class UsersModule {}
