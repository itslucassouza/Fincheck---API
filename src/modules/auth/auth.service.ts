import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticateDto } from './dto/authenticate.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { compare, hash } from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersRepo: UsersRepository,
        private readonly jwtService: JwtService,
    ) { }

    async signin(authenticateDto: AuthenticateDto) {
        const { email, password } = authenticateDto

        const user = await this.usersRepo.findUnique({
            where: {
                email: email
            }
        });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordValid = await compare(password, user.password)

        if (!isPasswordValid) {
            throw new UnauthorizedException('invalid credentials');
        }

        const accessToken = await this.generateccessToken(user.id)

        return { accessToken }
    }

    async signup(signupDto: SignupDto) {
        const { name, email, password } = signupDto;

        const emailTaken = await this.usersRepo.findUnique({
            where: {
                email,
            },
        });

        if (emailTaken) {
            throw new ConflictException("This email is already existy");
        }

        const hashedPassword = await hash(password, 12);

        const user = await this.usersRepo.create({
            data: {
                name,
                email,
                password: hashedPassword,
                categories: {
                    createMany: {
                        data: [
                            { name: "Salário", icon: "salary", type: "INCOME" },
                            { name: "Freelance", icon: "freelance", type: "INCOME" },
                            { name: "Outro", icon: "other", type: "INCOME" },
                            { name: "Casa", icon: "home", type: "EXPENSE" },
                            { name: "Alimentação", icon: "food", type: "EXPENSE" },
                            { name: "Educação", icon: "education", type: "EXPENSE" },
                            { name: "Lazer", icon: "fun", type: "EXPENSE" },
                            { name: "Mercado", icon: "grocery", type: "EXPENSE" },
                            { name: "Roupas", icon: "clothes", type: "EXPENSE" },
                            { name: "Transporte", icon: "transport", type: "EXPENSE" },
                            { name: "Viagem", icon: "travel", type: "EXPENSE" },
                            { name: "Outro", icon: "other", type: "EXPENSE" },
                        ],
                    },
                },
            },
        });

        const accessToken = await this.generateccessToken(user.id)

        return { accessToken }
    }

    private generateccessToken(userId: string) {
        return this.jwtService.signAsync({ sub: userId })
    }

}
