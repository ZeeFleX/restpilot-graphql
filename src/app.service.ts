import { Injectable } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';

@Injectable()
export class AppService {
  constructor(private readonly rabbitMQ: RabbitmqService) {}
  public publishMessage(messageDto: any): void {
    this.rabbitMQ.publish('TEST-2', messageDto);
  }

  testRPC(messageDto: any): Promise<any> {
    return this.rabbitMQ.rpcSend(messageDto);
  }
}
