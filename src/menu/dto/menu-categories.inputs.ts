import { ICreateMenuCategoryRequestDTO } from 'src/types';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMenuCategoryInput implements ICreateMenuCategoryRequestDTO {
  @Field(() => String, { description: 'Name of menu category' })
  categoryName: string;
}
