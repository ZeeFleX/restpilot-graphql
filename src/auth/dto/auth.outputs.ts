import { AuthEntities, AuthDTO } from 'src/types/shared';
import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
class Role implements Partial<AuthEntities.Role> {
  @Field(() => String)
  name: string;
}

@ObjectType()
export class SignUpOutput implements AuthDTO.Response.SignUp {
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
export class SignInOutput implements AuthDTO.Response.SignIn {
  @Field(() => String, { description: 'JWT access token' })
  accessToken: string;
}
