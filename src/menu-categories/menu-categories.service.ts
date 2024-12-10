import { Injectable } from '@nestjs/common';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { CreateMenuCategoryInput } from './dto/menu-category.inputs';

@Injectable()
export class MenuCategoriesService {
  constructor(private readonly rabbitMQ: RabbitmqService) {}

  findAll() {
    return this.rabbitMQ.rpcSend(
      'menu-exchange',
      'menu.menuCategories.findAll',
    );
  }

  create(createMenuCategoryInput: CreateMenuCategoryInput) {
    return this.rabbitMQ.rpcSend(
      'menu-exchange',
      'menu.menuCategories.create',
      createMenuCategoryInput,
    );
  }
}
