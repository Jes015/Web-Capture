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

  @Column('bigint', {
    default: new Date().getTime(),
  })
  requestedVerification: number;
}
