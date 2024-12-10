import { Injectable } from '@nestjs/common';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';

@Injectable()
export class MenuCategoriesService {
  constructor(private readonly rabbitMQ: RabbitmqService) {}

  findAll() {
    return this.rabbitMQ.rpcSend(
      'menu-exchange',
      'menu.menuCategories.findAll',
    );
  }
}
