import { Controller, Post, Body, Get, Req, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ActiveUSerId } from "src/shared/decorators/ActiveUserId";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('/me')
  me(@ActiveUSerId() userId: any) {

    return this.usersService.getUserById(userId)
  }

}
