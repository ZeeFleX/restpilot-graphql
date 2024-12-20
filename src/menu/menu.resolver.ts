import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MenuService } from './menu.service';
import { IMenuCategoryEntity } from './entities';
import { CreateMenuCategoryInput } from './dto/menu-categories.inputs';

@Resolver()
export class MenuResolver {
  constructor(private readonly service: MenuService) {}

  @Query(() => [IMenuCategoryEntity], { name: 'menuCategories' })
  findAll() {
    return this.service.findAll();
  }

  @Mutation(() => IMenuCategoryEntity, { name: 'createMenuCategory' })
  create(
    @Args('createMenuCategoryInput')
    createMenuCategoryInput: CreateMenuCategoryInput,
  ) {
    return this.service.create(createMenuCategoryInput);
  }
}
