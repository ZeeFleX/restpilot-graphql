import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MenuEntities } from 'shared-types';

@ObjectType()
export class MenuCategoryEntity implements MenuEntities.Category {
  @Field(() => String, { description: 'Unique ID of menu category' })
  id: string;

  @Field(() => String, { description: 'Name of category' })
  name: string;
}
