import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // 设置 log
    super({ log: ['query', 'info', 'warn', 'error'] });

    // 添加中间件(处理bigint类型)
    this.$use(async (params, next) => {
      const before = Date.now();
      const result = await next(params);
      const after = Date.now();
      console.log(
        `Query ${params.model}.${params.action} took ${after - before}ms`,
      );
      return result ? this.serialize(result) : result;
    });
  }

  serialize(obj) {
    if (typeof obj === 'bigint') {
      return obj.toString(); // 避免精度丢失
    } else if (typeof obj === 'object' && obj !== null) {
      return JSON.parse(
        JSON.stringify(obj, (key, value) =>
          typeof value === 'bigint' ? value.toString() : value,
        ),
      );
    }
    return obj;
  }

  async onModuleInit() {
    try {
      await this.$connect();
    } catch (error) {
      console.error('Database connection failed:', error);
      throw new Error('Database connection failed');
    }
  }
}
