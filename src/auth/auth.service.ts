import { Injectable } from '@nestjs/common';
import {
  SignUpInput,
  SignInInput,
  CompanySignUpInput,
} from './dto/auth.inputs';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private readonly RMQ: RabbitmqService) {}

  async signUp(signUpInput: SignUpInput) {
    try {
      const response = await lastValueFrom(
        this.RMQ.rpcSend(
          'coordinatorService',
          'coordinator.user.signUp',
          signUpInput,
        ),
      );

      if (response.error) {
        throw new Error(response.error.message);
      }

      return response;
    } catch (error) {
      console.log(error);
      throw new Error(`Registration failed: ${error.message}`);
    }
  }

  async companySignUp(companySignUpInput: CompanySignUpInput) {
    try {
      const response = await lastValueFrom(
        this.RMQ.rpcSend(
          'coordinatorService',
          'coordinator.company.signUp',
          companySignUpInput,
        ),
      );

      if (response.error) {
        throw new Error(response.error.message);
      }

      return response;
    } catch (error) {
      console.log(error);
      throw new Error(`Registration failed: ${error.message}`);
    }
  }

  async signIn(signInInput: SignInInput) {
    try {
      const response = await lastValueFrom(
        this.RMQ.rpcSend('authService', 'user.signin', signInInput),
      );

      if (response.error) {
        throw new Error(response.error.message);
      }

      return response;
    } catch (error) {
      throw new Error(`Sign in failed: ${error.message}`);
    }
  }
}
