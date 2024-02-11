import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { hashSync } from 'bcrypt';
import { ResendService } from 'nestjs-resend';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { SignUpDto } from '../auth/dto';
import { BadCredentialsException } from '../common/exceptions';
import { postgresErrorHandler } from '../common/util';
import { UnverifiedEmail } from './entities';

@Injectable()
export class EmailVerificationService {
  constructor(
    @InjectRepository(UnverifiedEmail)
    private readonly unverifiedEmailRepository: Repository<UnverifiedEmail>,

    private readonly resendService: ResendService,

    private readonly jwtService: JwtService,

    private readonly configService: ConfigService,

    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  async startEmailVerification(createUnverifiedEmailDto: SignUpDto) {
    try {
      createUnverifiedEmailDto.password = hashSync(
        createUnverifiedEmailDto.password,
        10,
      );

      const unverifiedEmail = this.unverifiedEmailRepository.create({
        email: createUnverifiedEmailDto.email,
        requestedVerification: new Date(),
      });
      await this.unverifiedEmailRepository.save(unverifiedEmail);

      let validationLink = 'https://screen-capture-nine.vercel.app/';
      validationLink += await this.jwtService.signAsync(
        createUnverifiedEmailDto,
      );

      this.sendEmail(
        unverifiedEmail.email,
        `Click <b><a href="${validationLink}">CONFIRM</a></b> to confirm your email`,
      );

      return 'Email verification sended';
    } catch (error) {
      postgresErrorHandler(error);
    }
  }

  async verifyAndSignUpEmail(token: string) {
    try {
      const isAValidToken = await this.jwtService.verifyAsync(token);

      const userDataDecoded = this.jwtService.decode(token);

      console.log({ isAValidToken, userDataDecoded });

      const { affected } = await this.unverifiedEmailRepository.delete({
        email: userDataDecoded.email,
      });

      if (affected === 0) {
        throw new NotFoundException(`Email ${userDataDecoded.email} not found`);
      }

      this.sendEmail(userDataDecoded.email, `Your email has been verified`);

      return await this.authService.signUp(userDataDecoded);
    } catch (error) {
      throw new BadCredentialsException();
    }
  }

  async sendEmail(to: string, html: string) {
    const fromData = {
      subject: this.configService.get<string>('RESEND_FROM_SUBJECT'),
      email: this.configService.get<string>('RESEND_FROM_EMAIL'),
    };

    this.resendService.send({
      from: `${fromData.subject} ${fromData.email}`,
      to,
      subject: 'Email verification - Screen capture',
      html,
    });
  }
}
