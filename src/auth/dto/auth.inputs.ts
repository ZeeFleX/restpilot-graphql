import { Field, InputType } from '@nestjs/graphql';
import { ISignInRequestDTO, ISignUpRequestDTO } from 'src/types';

@InputType()
export class SignupInput implements ISignUpRequestDTO {
  @Field(() => String)
  phone: string;

  @Field(() => String)
  password: string;
}

@InputType()
export class SigninInput implements ISignInRequestDTO {
  @Field(() => String)
  phone: string;

  @Field(() => String)
  password: string;
}
