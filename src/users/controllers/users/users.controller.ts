// import {Body, Delete, Controller, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
// import { CreateUserDto } from 'src/users/dto/CreateUsers.dto';
// import { UpdateUserDto } from 'src/users/dto/UpdateUsers.dto';
// import { UsersService } from 'src/users/services/users/users.service';



// @Controller('users')
// export class UsersController {

//     constructor(
//         private userService: UsersService) {}

//     @Get()
//     async getUsers() {
//         const users = await this.userService.findUsers();
//         return users;
//     }

//     //    @Get()
//     // getUsers() {
//     //     return this.userService.findUsers();   
//     // }



//     @Post()
//     createUsers(
//         @Body() createUserDto: CreateUserDto) {
//             this.userService.createUsers(createUserDto);
//         }

//     @Put(':id')
//     async updateUserById(@Param('id', ParseIntPipe) id: number,   
//     @Body() updateUserDto: UpdateUserDto, )
//      {
//        await this.userService.updateUser(id, updateUserDto)
//     }

//     @Delete(':id')
//     async deleteUserById(@Param('id', ParseIntPipe) id: number )   {
//        await this.userService.deleteUser(id);
//     }

// }
