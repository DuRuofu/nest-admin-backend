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

import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('鉴权管理')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiOperation({ summary: '用户登录' })
  login(@Body() LoginAuthDto: LoginAuthDto) {
    return this.authService.login(LoginAuthDto);
  }

  @Get('/async-routes')
  @ApiOperation({ summary: '获取动态路由' })
  getAsyncRoutes() {
    return this.authService.getAsyncRoutes();
  }
}
