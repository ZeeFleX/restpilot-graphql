import { Field, InputType } from '@nestjs/graphql';
import { AuthDTO } from 'shared-types';

@InputType()
export class SignUpInput implements AuthDTO.Request.SignUp {
  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  firstname: string;

  @Field(() => String)
  lastname: string;

  @Field(() => String, { nullable: true })
  surname: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  confirmPassword: string;
}

@InputType()
export class CompanySignUpInput implements AuthDTO.Request.CompanySignUp {
  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  firstname: string;

  @Field(() => String)
  lastname: string;

  @Field(() => String, { nullable: true })
  surname: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  confirmPassword: string;

  @Field(() => String)
  companyName: string;

  @Field(() => String)
  inn: string;

  @Field(() => String)
  address: string;
}

@InputType()
export class SignInInput implements AuthDTO.Request.SignIn {
  @Field(() => String)
  phone: string;

  @Field(() => String)
  password: string;
}
