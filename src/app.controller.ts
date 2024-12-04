import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async create(@Body() createDto: any) {
    return this.appService.publishMessage(createDto);
  }

  @Post('/rpc')
  async testRPC(@Body() createDto: any) {
    console.log('test');
    return this.appService.testRPC(createDto);
  }
}
