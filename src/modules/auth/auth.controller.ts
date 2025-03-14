import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { registerAutoDto } from './dto/register-auth.dto';

import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('鉴权管理')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiOperation({ summary: '用户登录' })
  login(@Body() LoginAuthDto: LoginAuthDto) {
    return this.authService.login(LoginAuthDto);
  }

  @Post('/register')
  @ApiOperation({ summary: '用户注册' })
  register(@Body() registerAutoDto: registerAutoDto) {
    return this.authService.register(registerAutoDto);
  }

  @Get('/async-routes')
  @ApiOperation({ summary: '获取动态路由' })
  getAsyncRoutes() {
    return this.authService.getAsyncRoutes();
  }
}
