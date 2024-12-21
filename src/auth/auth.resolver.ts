import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Logger } from 'shared-functions';
import {
  SignUpInput,
  SignInInput,
  CompanySignUpInput,
} from './dto/auth.inputs';
import {
  SignUpOutput,
  SignInOutput,
  CompanySignUpOutput,
} from './dto/auth.outputs';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly service: AuthService) {}

  @Mutation(() => SignUpOutput, { name: 'signUp' })
  @Logger('green')
  async signUp(
    @Args('signUpInput') signupInput: SignUpInput,
  ): Promise<SignUpOutput> {
    return this.service.signUp(signupInput);
  }

  @Mutation(() => CompanySignUpOutput, { name: 'companySignUp' })
  @Logger('green')
  async companySignUp(
    @Args('companySignUpInput') companySignupInput: CompanySignUpInput,
  ): Promise<CompanySignUpOutput> {
    return this.service.companySignUp(companySignupInput);
  }

  @Mutation(() => SignInOutput, { name: 'signIn' })
  @Logger('green')
  async signIn(
    @Args('signInInput') signinInput: SignInInput,
  ): Promise<SignInOutput> {
    return this.service.signIn(signinInput);
  }
}
