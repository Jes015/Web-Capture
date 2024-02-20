import { IsString, MaxLength, MinLength } from 'class-validator';

export class CheckUsernameDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(40)
  username: string;
}
