import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserServices } from './providers/user.services';
import { AuthModule } from 'src/auth/auth.module';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCreateManyProvider } from './providers/user-create-many.provider';
import { CreateUserProvider } from './providers/create-user.provider';
import { FindOneUserByEmailProvider } from './providers/find-one-user-by-email.provider';

@Module({
  controllers: [UsersController],
  providers: [
    UserServices,
    UserCreateManyProvider,
    CreateUserProvider,
    FindOneUserByEmailProvider,
  ],
  exports: [UserServices],
  imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([User])],
})
export class UsersModule {}
