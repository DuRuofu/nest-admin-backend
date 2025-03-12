import { Global, Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { RoleModule } from './modules/role/role.module';
import { OrgModule } from './modules/org/org.module';
import { UserModule } from './modules/user/user.module';
import { PermissionModule } from './modules/permission/permission.module';

// .env参数的校验规则及配置
const ConfigModuleConfig = {
  isGlobal: true,
  validationSchema: Joi.object({
    DATABASE_URL: Joi.string().required(),
    PROJECT_DOMAIN: Joi.string().default("127.0.0.1"),
    PROJECT_NAME: Joi.string().default("project-name"),
    TOKEN_SECRET: Joi.string().default("aabbccdd"),
    SALT_SECRET: Joi.string().default("aabbccdd"),
    SERVER_PORT_HTTP: Joi.number().default(9876),
    SERVER_PORT_HTTPS: Joi.number().default(9877),
  })
}  

@Global()
@Module({
  controllers: [AppController],
  providers: [AppService, Logger],
  exports: [Logger],
  imports: [
    ConfigModule.forRoot(ConfigModuleConfig),
    PrismaModule,
    UserModule,
    AuthModule,
    RoleModule,
    OrgModule,
    PermissionModule,
  ],
})
  
export class AppModule {}
