import { MenuDTO } from 'shared-types';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMenuCategoryInput implements MenuDTO.Request.CreateCategory {
  @Field(() => String, { description: 'Name of menu category' })
  name: string;
}
