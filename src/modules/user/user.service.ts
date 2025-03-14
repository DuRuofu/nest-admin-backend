import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../database/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService,
        private readonly logger: Logger,
  ) { }
  
  // 创建用户
  create(createUserDto: CreateUserDto) {
    // // 检查用户名是否重复
    // const user = this.prisma.user.findUnique({
    //   where: {
    //     username: createUserDto.username,
    //   },
    // });
    // if (user) {
    //   this.logger.log(user);
    //   throw new Error('用户名已存在');
      
      
    // }
    
    return this.prisma.user.create({
      data: {
        ...createUserDto,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany();
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

  remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
