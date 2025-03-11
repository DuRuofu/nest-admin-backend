import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
	@IsString()
	@IsNotEmpty({ message: '用户名不能为空' })
	username: string;

	@IsEmail({}, { message: '邮箱格式不正确' })
	@IsNotEmpty({ message: '邮箱不能为空' })
	email: string;

	@IsString()
	@MinLength(6, { message: '密码长度不能少于6位' })
	password: string;
}
