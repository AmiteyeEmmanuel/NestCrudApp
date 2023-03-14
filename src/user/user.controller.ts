import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    const resp = await this.userService.create(createUserDto);
    return resp;
  }

  @Get()
  public async findAll() {
    const resp = await this.userService.findAll();
    return resp;
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const resp = await this.userService.update(+id, updateUserDto);
    return resp;
  }

  @Delete(':id')
  public async remove(@Param('id') id: number) {
    const resp = await this.userService.remove(+id);
    return resp;
  }
}
