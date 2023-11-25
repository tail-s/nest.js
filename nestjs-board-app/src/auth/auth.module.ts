import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'mynestjsboardpjt',
      signOptions: {
        expiresIn: 60 * 60,
      },
    }),
  ],
  controllers: [AuthController],
  // JwtStrategy를 이 Auth 모듈에서 사용할 수 있도록 등록
  providers: [AuthService, UserRepository, JwtStrategy],
  // JwtStrategy, PassportModule을 다른 모듈에서 사용할 수 있도록 등록
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
