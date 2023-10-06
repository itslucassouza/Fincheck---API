/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  create(_createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
}
