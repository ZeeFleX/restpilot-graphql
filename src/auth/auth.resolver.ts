import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignupInput, SigninInput } from './dto/auth.inputs';
import { SignupOutput, SigninOutput } from './dto/auth.outputs';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly service: AuthService) {}

  @Mutation(() => SignupOutput, { name: 'signup' })
  async signup(
    @Args('signupInput') signupInput: SignupInput,
  ): Promise<SignupOutput> {
    return this.service.signup(signupInput);
  }

  @Mutation(() => SigninOutput, { name: 'signin' })
  async signin(
    @Args('signinInput') signinInput: SigninInput,
  ): Promise<SigninOutput> {
    return this.service.signin(signinInput);
  }
}
