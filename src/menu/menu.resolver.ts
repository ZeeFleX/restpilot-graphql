import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MenuService } from './menu.service';
import { MenuCategoryEntity } from './entities';
import { CreateMenuCategoryInput } from './dto/menu-categories.inputs';

@Resolver()
export class MenuResolver {
  constructor(private readonly service: MenuService) {}

  @Query(() => [MenuCategoryEntity], { name: 'menuCategories' })
  findAll() {
    return this.service.findAll();
  }

  @Mutation(() => MenuCategoryEntity, { name: 'createMenuCategory' })
  create(
    @Args('createMenuCategoryInput')
    createMenuCategoryInput: CreateMenuCategoryInput,
  ) {
    return this.service.create(createMenuCategoryInput);
  }
}
