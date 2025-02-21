import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './auth/decorators/user.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloIndex(): string {
    return 'welcome to nestjs';
  }

  @Get('onlyuser')
  async getHello(@User() user): Promise<string> {
    return await this.appService.getHello(user.id);
  }
}
