import { AuthEntities, AuthDTO, CompaniesEntities } from 'shared-types';
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

  @Field(() => String, { description: 'User email', nullable: true })
  email: string;

  @Field(() => String, { description: 'User firstname' })
  firstname: string;

  @Field(() => String, { description: 'User lastname', nullable: true })
  lastname: string;

  @Field(() => String, { description: 'User surname', nullable: true })
  surname: string;

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
  companyName: string;

  @Field(() => String, { description: 'Company address' })
  address: string;

  @Field(() => String, { description: 'Company inn' })
  inn: string;

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
export class RoleEntity implements Partial<AuthEntities.Role> {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description: string;
}

@ObjectType()
export class UserEntity implements Partial<AuthEntities.User> {
  @Field(() => ID)
  id: string;

  @Field(() => String, { description: 'User phone number' })
  phone: string;

  @Field(() => String, { description: 'User email' })
  email: string;

  @Field(() => String, { description: 'User first name' })
  firstname: string;

  @Field(() => String, { description: 'User last name' })
  lastname: string;

  @Field(() => String, { description: 'User surname' })
  surname: string;

  @Field(() => Role, { description: 'User role', nullable: true })
  role: Role;

  @Field(() => Date, { description: 'User creation date', nullable: true })
  createdAt: Date;
}

@ObjectType()
export class SignInOutput implements AuthDTO.Response.SignIn {
  @Field(() => String, { description: 'JWT access token' })
  accessToken: string;

  @Field(() => UserEntity, { description: 'User data' })
  user: UserEntity;
}
