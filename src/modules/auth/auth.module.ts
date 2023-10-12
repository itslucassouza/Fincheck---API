import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      signOptions: { expiresIn: '7d' },
      secret: 'unsecure_jwt_secret'
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
