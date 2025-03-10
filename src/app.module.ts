import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { RoleModule } from './modules/role/role.module';
import { OrgModule } from './modules/org/org.module';
import { UserModule } from './modules/user/user.module';
import { PermissionModule } from './modules/permission/permission.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule, RoleModule, OrgModule, UserModule, PermissionModule],
})
export class AppModule {}
