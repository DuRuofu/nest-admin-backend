import {
  Controller,
  Inject,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User as UserModel } from '@prisma/client';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@ApiTags('用户管理')
export class UserController {
  constructor(
    private readonly logger: Logger,
    private readonly userService: UserService) { 
    this.logger.log('UserController init');
    }

  @Get()
  @ApiOperation({ summary: '查询全体用户的信息', description: '不分页，仅做测试使用' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '获取单个用户的信息', description: '具体描述XXX' })
  findOne(@Param('id') id: string): Promise<UserModel> {
    console.log(id);
    return this.userService.findOne({ id: String(id) });
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新用户信息'})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户' })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
