import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { ConfigKey } from './config/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly ConfigService: ConfigService

  ) {}

  @Get()
  getHello(): string {
    return this.ConfigService.get(ConfigKey.DATABASE_URL);
  }
}
