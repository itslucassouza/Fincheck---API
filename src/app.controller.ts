import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class UsersController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
