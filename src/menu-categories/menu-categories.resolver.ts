import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MenuCategoriesService } from './menu-categories.service';
import { IMenuCategoryGraphQL } from './entities';
import { CreateMenuCategoryInput } from './dto/menu-category.inputs';

@Resolver(() => IMenuCategoryGraphQL)
export class MenuCategoriesResolver {
  constructor(private readonly menuCategoriesService: MenuCategoriesService) {}

  @Query(() => [IMenuCategoryGraphQL], { name: 'menuCategories' })
  findAll() {
    return this.menuCategoriesService.findAll();
  }

  @Mutation(() => IMenuCategoryGraphQL, { name: 'createMenuCategory' })
  create(
    @Args('createMenuCategoryInput')
    createMenuCategoryInput: CreateMenuCategoryInput,
  ) {
    return this.menuCategoriesService.create(createMenuCategoryInput);
  }
}
