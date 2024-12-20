import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IMenuCategory } from 'src/types/shared/entities';

@ObjectType()
export class IMenuCategoryEntity implements IMenuCategory {
  @Field(() => Int, { description: 'Unique ID of menu category' })
  id: number;

  @Field(() => String, { description: 'Name of category' })
  categoryName: string;
}
