import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MenuCategory {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
