import { Injectable } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';

@Injectable()
export class AppService {
  constructor(private readonly rabbitMQ: RabbitmqService) {}

  testRPC(data: any): Promise<any> {
    return this.rabbitMQ.rpcSend('orders-exchange', 'orders.testWithOrders', data);
  }
}
