import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignInDto {
  @IsEmail(
    {
      host_whitelist: ['gmail.com'],
    },
    {
      message: 'email must be an email gmail.',
    },
  )
  @MaxLength(50)
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(40)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;
}
