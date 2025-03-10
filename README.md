<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```
## 项目目录

```bash
nestjs-project/
│── src/
│   ├── modules/              # 业务模块
│   │   ├── user/             # 用户模块
│   │   │   ├── dto/          # 数据传输对象 (DTO)
│   │   │   ├── entities/     # 数据库实体 (TypeORM / Prisma)
│   │   │   ├── user.controller.ts
│   │   │   ├── user.service.ts
│   │   │   ├── user.module.ts
│   │   ├── auth/             # 认证模块 (JWT / Passport)
│   │   ├── role/             # 角色权限模块
│   │   ├── log/              # 日志管理模块
│   │   ├── device/           # 设备管理模块
│   ├── common/               # 通用代码
│   │   ├── filters/          # 全局异常过滤器
│   │   ├── guards/           # 守卫 (权限控制)
│   │   ├── interceptors/     # 拦截器 (日志、数据格式化)
│   │   ├── decorators/       # 自定义装饰器
│   │   ├── pipes/            # 数据校验管道
│   │   ├── constants.ts      # 常量
│   ├── config/               # 配置文件
│   │   ├── config.module.ts  # 配置模块
│   │   ├── config.service.ts # 配置服务
│   │   ├── env/              # 配置环境变量 (dev, prod)
│   ├── database/             # 数据库相关
│   │   ├── prisma/           # Prisma ORM 相关
│   │   ├── migrations/       # 数据库迁移文件
│   │   ├── database.module.ts
│   ├── main.ts               # 入口文件
│   ├── app.module.ts         # 根模块
│── test/                     # 测试
│── scripts/                  # 脚本 (数据库初始化、自动化任务)
│── .env                      # 环境变量
│── .gitignore
│── package.json
│── tsconfig.json
│── README.md
```
