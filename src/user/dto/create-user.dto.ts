import { TaskStatus } from '../entities/user.entity';
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName;

  @IsEmail()
  email: string;

  phone: number;

  status: TaskStatus;
}
