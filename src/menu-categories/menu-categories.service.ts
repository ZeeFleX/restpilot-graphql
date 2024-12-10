import { Injectable } from '@nestjs/common';
import { CreateMenuCategoryInput } from './dto/create-menu-category.input';
import { UpdateMenuCategoryInput } from './dto/update-menu-category.input';

@Injectable()
export class MenuCategoriesService {
  findAll() {
    return [];
  }
}
