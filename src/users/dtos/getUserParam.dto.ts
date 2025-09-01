import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class UserParam {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
