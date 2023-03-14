import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserParams, UpdateUserParams } from './utils/types';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  public async create(userDetails: CreateUserParams) {
    const newUser = this.UserRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });
    await this.UserRepository.save(newUser);
    return newUser;
  }

  findAll() {
    return this.UserRepository.find();
  }

  update(id: number, updatedDetails: UpdateUserParams) {
    return this.UserRepository.update({ id }, { ...updatedDetails });
  }

  remove(id: number) {
    return this.UserRepository.delete(id);
  }
}
