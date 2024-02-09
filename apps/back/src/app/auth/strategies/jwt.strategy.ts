import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { BadCredentialsException } from 'src/app/common/exceptions';
import { User } from 'src/app/user/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtPayload } from '../models';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super({
      secretOrKey: configService.get('AUTH_SECRET'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload) {
    if (payload.id == null) {
      throw new BadCredentialsException(`Bad credentials in jwt: id not found`);
    }

    const user = await this.userRepository.findOneBy({ id: payload.id });

    if (user == null) {
      throw new BadCredentialsException(
        `Bad credentials in jwt: User with id ${payload.id} not found`,
      );
    } else if (user.isActive === false) {
      throw new BadCredentialsException(`Bad credentials: user inactive`);
    }

    return user;
  }
}
