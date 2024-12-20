import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import {
  SignUpInput,
  SignInInput,
  CompanySignUpInput,
} from './dto/auth.inputs';
import { SignUpOutput, SignInOutput } from './dto/auth.outputs';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly service: AuthService) {}

  @Mutation(() => SignUpOutput, { name: 'signUp' })
  async signUp(
    @Args('signUpInput') signupInput: SignUpInput,
  ): Promise<SignUpOutput> {
    return this.service.signUp(signupInput);
  }

  @Mutation(() => SignUpOutput, { name: 'companySignUp' })
  async companySignUp(
    @Args('companySignUpInput') companySignupInput: CompanySignUpInput,
  ): Promise<SignUpOutput> {
    return this.service.companySignUp(companySignupInput);
  }

  @Mutation(() => SignInOutput, { name: 'signIn' })
  async signIn(
    @Args('signInInput') signinInput: SignInInput,
  ): Promise<SignInOutput> {
    return this.service.signIn(signinInput);
  }
}
