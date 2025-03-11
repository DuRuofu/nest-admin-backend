import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  login(LoginAuthDto: LoginAuthDto) {
    console.log(LoginAuthDto);

    return {
      success: true,
      data: {
        avatar: 'https://avatars.githubusercontent.com/u/44761321',
        username: 'admin',
        nickname: '小铭',
        roles: ['admin'],
        permissions: ['*:*:*'],
        accessToken: 'eyJhbGciOiJIUzUxMiJ9.admin',
        refreshToken: 'eyJhbGciOiJIUzUxMiJ9.adminRefresh',
        expires: '2030/10/30 00:00:00',
      },
    };
  }

  getAsyncRoutes() {
    /**
     * roles：页面级别权限，这里模拟二种 "admin"、"common"
     * admin：管理员角色
     * common：普通角色
     */
    const permissionRouter = {
      path: '/permission',
      meta: {
        title: '权限管理',
        icon: 'ep:lollipop',
        rank: 10,
      },
      children: [
        {
          path: '/permission/page/index',
          name: 'PermissionPage',
          meta: {
            title: '页面权限',
            roles: ['admin', 'common'],
          },
        },
        {
          path: '/permission/button',
          meta: {
            title: '按钮权限',
            roles: ['admin', 'common'],
          },
          children: [
            {
              path: '/permission/button/router',
              component: 'permission/button/index',
              name: 'PermissionButtonRouter',
              meta: {
                title: '路由返回按钮权限',
                auths: [
                  'permission:btn:add',
                  'permission:btn:edit',
                  'permission:btn:delete',
                ],
              },
            },
            {
              path: '/permission/button/login',
              component: 'permission/button/perms',
              name: 'PermissionButtonLogin',
              meta: {
                title: '登录接口返回按钮权限',
              },
            },
          ],
        },
      ],
    };

    const adminRouter = {
      path: '/admin',
      meta: {
        icon: 'eos-icons:admin',
        title: '系统管理',
        rank: 20,
      },
      children: [
        {
          path: '/admin/account',
          name: 'account',
          meta: {
            title: '账户管理',
          },
        },
        {
          path: '/admin/role',
          name: 'role',
          meta: {
            title: '角色管理',
            roles: ['admin'],
          },
        },
        {
          path: '/admin/menu',
          name: 'menu',
          meta: {
            title: '菜单管理',
            roles: ['admin'],
          },
        },
      ],
    };
    console.log('获取动态路由');

    return {
      success: true,
      data: [permissionRouter, adminRouter],
    };
  }
}
