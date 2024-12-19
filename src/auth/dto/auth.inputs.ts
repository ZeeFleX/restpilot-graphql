import { Field, InputType } from '@nestjs/graphql';
import { ISignInDTO, ISignUpDTO } from 'src/types';

@InputType()
export class SignupInput implements ISignUpDTO {
  @Field(() => String)
  phone: string;

  @Field(() => String)
  password: string;
}

@InputType()
export class SigninInput implements ISignInDTO {
  @Field(() => String)
  phone: string;

  @Field(() => String)
  password: string;
}
