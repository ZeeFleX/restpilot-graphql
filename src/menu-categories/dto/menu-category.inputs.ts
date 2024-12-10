import { ICreateMenuCategoryDTO } from 'src/types';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMenuCategoryInput implements ICreateMenuCategoryDTO {
  @Field(() => String, { description: 'Name of menu category' })
  categoryName: string;
}
