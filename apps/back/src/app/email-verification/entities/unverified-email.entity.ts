import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('unverified-emails')
export class UnverifiedEmail {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('date', {
    default: new Date(),
  })
  requestedVerification: Date;
}
