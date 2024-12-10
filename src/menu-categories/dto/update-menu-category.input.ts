import { CreateMenuCategoryInput } from './create-menu-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMenuCategoryInput extends PartialType(CreateMenuCategoryInput) {
  @Field(() => Int)
  id: number;
}
