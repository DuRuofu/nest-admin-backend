import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../database/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    // // 假设 createdBy 和 updatedBy 取自当前登录用户
    // const createdBy = 'system'; // 或者从请求的用户信息中获取
    // const updatedBy = createdBy;
    // 打印参数
    console.log(createUserDto);
    return this.prisma.user.create({
      data: {
        ...createUserDto
      },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
