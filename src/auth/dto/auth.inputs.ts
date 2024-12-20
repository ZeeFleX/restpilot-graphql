import { Field, InputType } from '@nestjs/graphql';
import {
  ISignInRequestDTO,
  ISignUpRequestDTO,
  ICompanySignUpRequestDTO,
} from 'src/types';

@InputType()
export class SignUpInput implements ISignUpRequestDTO {
  @Field(() => String)
  phone: string;

  @Field(() => String)
  password: string;
}

@InputType()
export class CompanySignUpInput implements ICompanySignUpRequestDTO {
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
export class SignInInput implements ISignInRequestDTO {
  @Field(() => String)
  phone: string;

  @Field(() => String)
  password: string;
}
