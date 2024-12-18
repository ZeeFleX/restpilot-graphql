import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MenuCategoriesService } from './menu-categories.service';
import { IMenuCategoryGraphQL } from './entities';
import { CreateMenuCategoryInput } from './dto/menu-category.inputs';

@Resolver()
export class MenuCategoriesResolver {
  constructor(private readonly service: MenuCategoriesService) {}

  @Query(() => [IMenuCategoryGraphQL], { name: 'menuCategories' })
  findAll() {
    return this.service.findAll();
  }

  @Mutation(() => IMenuCategoryGraphQL, { name: 'createMenuCategory' })
  create(
    @Args('createMenuCategoryInput')
    createMenuCategoryInput: CreateMenuCategoryInput,
  ) {
    return this.service.create(createMenuCategoryInput);
  }
}
