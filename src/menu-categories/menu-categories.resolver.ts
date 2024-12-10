import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MenuCategoriesService } from './menu-categories.service';
import { IMenuCategoryGraphQL } from './entities';

@Resolver(() => IMenuCategoryGraphQL)
export class MenuCategoriesResolver {
  constructor(private readonly menuCategoriesService: MenuCategoriesService) {}

  @Query(() => [IMenuCategoryGraphQL], { name: 'menuCategories' })
  findAll() {
    return this.menuCategoriesService.findAll();
  }
}
