import { Column, Entity } from 'typeorm';

@Entity('unverified-emails')
export class UnverifiedEmail {
  @Column('text', {
    primary: true,
  })
  email: string;

  @Column('date', {
    default: new Date(),
  })
  requestedVerification: Date;
}
