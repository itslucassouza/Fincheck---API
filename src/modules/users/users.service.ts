/* eslint-disable @typescript-eslint/no-unused-vars */
import { ConflictException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { hash } from "bcryptjs";
import { UsersRepository } from "src/shared/database/repositories/users.repositories";

@Injectable()
export class UsersService {
    getUserById(userId: string) {
        return userId
    }
}
