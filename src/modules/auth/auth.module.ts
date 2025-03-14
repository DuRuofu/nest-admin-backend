import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConfigKey } from 'src/config/common.config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [UserModule, PassportModule, JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async (ConfigService: ConfigService) => ({ 
      secret: ConfigService.get<string>(ConfigKey.JWT_SECRET),
      signOptions: { expiresIn: '1d' }
    }),
    inject: [ConfigService]
  })],
})
export class AuthModule {}
