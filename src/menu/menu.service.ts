import { Injectable } from '@nestjs/common';
import { CreateMenuCategoryInput } from './dto/menu-categories.inputs';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';

@Injectable()
export class MenuService {
  constructor(private readonly RMQ: RabbitmqService) {}
  findAll() {
    try {
      return this.RMQ.rpcSend('menuService', 'menuCategories.findAll');
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  create(createMenuCategoryInput: CreateMenuCategoryInput) {
    try {
      return this.RMQ.rpcSend(
        'menuService',
        'menuCategories.create',
        createMenuCategoryInput,
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
