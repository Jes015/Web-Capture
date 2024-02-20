import { IsEmail } from 'class-validator';

export class CheckEmailDTO {
  @IsEmail()
  email: string;
}
