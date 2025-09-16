import { IsNotEmpty, IsString } from 'class-validator';

export class MetaOptions {
  @IsString()
  @IsNotEmpty()
  key: string;
  @IsNotEmpty()
  value: any;
}
