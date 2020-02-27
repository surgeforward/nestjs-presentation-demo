import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { User } from './user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'All the users.', type: [User] })
  async users(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  async user(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.usersService.getUser(id);
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return this.usersService.createUser(user);
  }

  @Put(':id')
  async updateUser(@Body() user: User): Promise<User> {
    return this.usersService.updateUser(user);
  }

  @Delete(':id')
  async removeUser(@Param('id') id: string): Promise<User> {
    return this.usersService.deleteUser(id);
  }
}
