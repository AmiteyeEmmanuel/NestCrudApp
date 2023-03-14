// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { User } from 'src/TypeOrm/entities/entity';
// import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
// import { Repository } from 'typeorm';

// @Injectable()
// export class UsersService {

//     constructor(
//         @InjectRepository(User)
//         private UserRepository: Repository<User>,
//     ) {}


//     findUsers() {
//        return this.UserRepository.find();
//     }

//     createUsers(userDetails: CreateUserParams) {
//         const newUser = this.UserRepository.create({ 
//             ...userDetails,
//              createdAt: new Date(),
//             });
//            return this.UserRepository.save(newUser);
//     }


//     updateUser(id:number,  updatedDetails: UpdateUserParams) {
//        return this.UserRepository.update({ id },
//             { ...updatedDetails });
//     }

//     deleteUser(id:number) {
//         return this.UserRepository.delete({id});
//     }
// }
