import { AuthEntities, AuthDTO, CompaniesEntities } from 'src/types/shared';
import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
class Role implements Partial<AuthEntities.Role> {
  @Field(() => String)
  name: string;
}

@ObjectType()
export class SignUpOutput implements AuthDTO.Response.SignUp {
  @Field(() => ID)
  id: string;

  @Field(() => String, { description: 'User phone number' })
  phone: string;

  @Field(() => Role, { description: 'User role', nullable: true })
  role: Role;

  @Field(() => Date, { description: 'User creation date', nullable: true })
  createdAt: Date;
}

@ObjectType()
export class CompanyEntity implements Partial<CompaniesEntities.Company> {
  @Field(() => ID)
  id: string;

  @Field(() => String, { description: 'Company name' })
  name: string;

  @Field(() => String, { description: 'Company address' })
  address: string;

  @Field(() => Date, { description: 'Company creation date', nullable: true })
  createdAt: Date;
}

@ObjectType()
export class CompanySignUpOutput implements AuthDTO.Response.CompanySignUp {
  @Field(() => SignUpOutput, { description: 'User data' })
  user: SignUpOutput;

  @Field(() => CompanyEntity, { description: 'Company data' })
  company: CompanyEntity;
}

@ObjectType()
export class SignInOutput implements AuthDTO.Response.SignIn {
  @Field(() => String, { description: 'JWT access token' })
  accessToken: string;
}
