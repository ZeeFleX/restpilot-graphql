import { Field, InputType } from '@nestjs/graphql';
import { AuthDTO } from 'src/types/shared';

@InputType()
export class SignUpInput implements AuthDTO.Request.SignUp {
  @Field(() => String)
  phone: string;

  @Field(() => String)
  password: string;
}

@InputType()
export class CompanySignUpInput implements AuthDTO.Request.CompanySignUp {
  @Field(() => String)
  phone: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  name: string;

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
