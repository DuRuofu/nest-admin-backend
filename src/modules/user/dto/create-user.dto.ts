import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: '用户名',
    example: 'john_doe',
  })
  @IsString()
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string;

  @ApiProperty({
    description: '用户邮箱',
    example: 'john@example.com',
  })
  @IsEmail({}, { message: '邮箱格式不正确' })
  @IsNotEmpty({ message: '邮箱不能为空' })
  email: string;

  @ApiProperty({
    description: '用户电话',
    example: '1234567890',
  })
  @IsString()
  @IsNotEmpty({ message: '电话不能为空' })
  phone: string;

  @ApiProperty({
    description: '用户密码，至少6位',
    example: 'password123',
    minLength: 6,
  })
  @IsString()
  @MinLength(6, { message: '密码长度不能少于6位' })
  password: string;
}
