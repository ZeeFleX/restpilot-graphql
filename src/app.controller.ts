import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/rpc')
  async testRPC(@Body() createDto: any) {
    return this.appService.testRPC('test');
  }
}
