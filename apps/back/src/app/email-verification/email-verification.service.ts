import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResendService } from 'nestjs-resend';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { SignUpDto } from '../auth/dto';
import { postgresErrorHandler } from '../common/util';
import { UnverifiedEmail } from './entities';

@Injectable()
export class EmailVerificationService {
  constructor(
    @InjectRepository(UnverifiedEmail)
    private readonly unverifiedEmailRepository: Repository<UnverifiedEmail>,

    private readonly resendService: ResendService,

    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  async startEmailVerification(createUnverifiedEmailDto: SignUpDto) {
    try {
      const unverifiedEmail = this.unverifiedEmailRepository.create({
        email: createUnverifiedEmailDto.email,
        requestedVerification: new Date(),
      });

      await this.unverifiedEmailRepository.save(unverifiedEmail);

      this.resendService.send({
        from: 'Jes015 <screen-recorder@resend.dev>',
        to: unverifiedEmail.email,
        subject: 'Email verification - Screen capture',
        html: `Click <a href="https://screen-capture-nine.vercel.app/">${JSON.stringify(createUnverifiedEmailDto)}</a> to confirm your email`,
      });

      return 'Email verification sended';
    } catch (error) {
      postgresErrorHandler(error);
    }
  }

  async verifyEmail(signUpDto: SignUpDto) {
    const { affected } = await this.unverifiedEmailRepository.delete({
      email: signUpDto.email,
    });

    if (affected === 0) {
      throw new NotFoundException(`Email ${signUpDto.email} not found`);
    }

    return await this.authService.signUp(signUpDto);
  }
}
