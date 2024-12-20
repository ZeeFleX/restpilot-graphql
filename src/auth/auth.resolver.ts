import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignupInput, SigninInput } from './dto/auth.inputs';
import { SignUpOutput, SignInOutput } from './dto/auth.outputs';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly service: AuthService) {}

  @Mutation(() => SignUpOutput, { name: 'signup' })
  async signup(
    @Args('signupInput') signupInput: SignupInput,
  ): Promise<SignUpOutput> {
    return this.service.signup(signupInput);
  }

  @Mutation(() => SignInOutput, { name: 'signin' })
  async signin(
    @Args('signinInput') signinInput: SigninInput,
  ): Promise<SignInOutput> {
    return this.service.signin(signinInput);
  }
}
