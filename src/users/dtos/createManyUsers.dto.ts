import { Type } from 'class-transformer';
import { ValidateNested, ArrayMinSize } from 'class-validator';
import { CreateUserDto } from './createUser.dto';

export class CreateManyUsersDto {
  @ValidateNested({ each: true })
  @Type(() => CreateUserDto)
  @ArrayMinSize(1)
  users: CreateUserDto[];
}
