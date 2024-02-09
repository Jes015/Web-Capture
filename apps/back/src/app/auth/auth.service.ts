import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compareSync, hashSync } from 'bcrypt';
import { Repository } from 'typeorm';
import { BadCredentialsException } from '../common/exceptions';
import { postgresErrorHandler } from '../common/util';
import { User } from '../user/entities/user.entity';
import { SignInDto, SignUpDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async signIn(signInDto: SignInDto) {
    const userPreloaded = await this.userRepository.findOne({
      where: { email: signInDto.email },
      select: {
        id: true,
        username: true,
        email: true,
        isActive: true,
        password: true,
        roles: true,
      },
    });

    if (userPreloaded == null) {
      throw new BadCredentialsException();
    }

    const isValidUser = compareSync(signInDto.password, userPreloaded.password);

    if (!isValidUser) {
      throw new BadCredentialsException();
    }

    return this.getUserAndJwt(userPreloaded);
  }

  async signUp(signUpDto: SignUpDto) {
    try {
      signUpDto.password = hashSync(signUpDto.password, 10);

      const user = this.userRepository.create(signUpDto);

      const userData = await this.userRepository.save(user);

      return this.getUserAndJwt(userData);
    } catch (error) {
      postgresErrorHandler(error);
    }
  }

  private getUserAndJwt(user: User) {
    const publicUserData: Partial<User> = structuredClone(user);

    delete publicUserData.password;

    //TODO:RETURN JWT
    return { user, token: 'MI-PIRULIN.COM' };
  }
}
