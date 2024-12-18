import { IUser } from 'src/types';
import { Field, ObjectType, ID } from '@nestjs/graphql';
import { IRole } from 'src/types';

@ObjectType()
class Role implements Partial<IRole> {
  @Field(() => String)
  name: string;
}

@ObjectType()
export class SignupOutput implements Partial<IUser> {
  @Field(() => ID)
  id: number;

  @Field(() => String, { description: 'User phone number' })
  phone: string;

  @Field(() => Role, { description: 'User role' })
  role: Role;

  @Field(() => Date)
  createdAt: Date;
}

@ObjectType()
export class SigninOutput {
  @Field(() => String, { description: 'JWT access token' })
  access_token: string;
}
