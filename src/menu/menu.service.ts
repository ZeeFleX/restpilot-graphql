import { Injectable } from '@nestjs/common';
import { CreateMenuCategoryInput } from './dto/menu-categories.inputs';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';

@Injectable()
export class MenuService {
  constructor(private readonly RMQ: RabbitmqService) {}
  findAll() {
    try {
      return this.RMQ.rpcSend('menuService', 'menu.categories.findAll');
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  create(createMenuCategoryInput: CreateMenuCategoryInput) {
    try {
      return this.RMQ.rpcSend(
        'menuService',
        'menu.categories.create',
        createMenuCategoryInput,
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
