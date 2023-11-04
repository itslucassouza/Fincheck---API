import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { env } from "process";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule { }
