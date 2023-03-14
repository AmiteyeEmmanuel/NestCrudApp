import { TaskStatus } from '../entities/user.entity';

export type CreateUserParams = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  status: TaskStatus;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  status: TaskStatus;
};
