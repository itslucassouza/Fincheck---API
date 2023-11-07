import { Body, Controller, Post, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.dto';
import { SignupDto } from './dto/create-user.dto';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @IsPublic()
  @Post('signin')
  authenticate(@Body() authenticateDto: AuthenticateDto) {
    return this.authService.signin(authenticateDto);
  }

  @Post('signup')
  @IsPublic()
  create(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}
