import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {
  @ApiProperty({
    description: '用户名',
    example: 'john_doe',
  })
  @IsString()
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string;

  @ApiProperty({
    description: '用户密码，至少6位',
    example: 'password123',
    minLength: 6,
  })
  @IsString()
  @MinLength(6, { message: '密码长度不能少于6位' })
  password: string;
}
