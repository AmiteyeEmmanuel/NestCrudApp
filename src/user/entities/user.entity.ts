import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TaskStatus {
  InProgress = 0,
  Declined = 1,
  Accepted = 2,
}

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ type: 'bigint' })
  phone: number;

  role: string;

  @Column({ nullable: true, default: TaskStatus.InProgress })
  status: TaskStatus;

  @Column()
  createdAt: Date;
}
