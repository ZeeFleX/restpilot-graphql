import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MenuCategoriesService } from './menu-categories.service';
import { MenuCategory } from './entities/menu-category.entity';
import { CreateMenuCategoryInput } from './dto/create-menu-category.input';
import { UpdateMenuCategoryInput } from './dto/update-menu-category.input';

@Resolver(() => MenuCategory)
export class MenuCategoriesResolver {
  constructor(private readonly menuCategoriesService: MenuCategoriesService) {}

  @Query(() => [MenuCategory], { name: 'menuCategories' })
  findAll() {
    return this.menuCategoriesService.findAll();
  }
}
