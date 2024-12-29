import { Injectable } from '@nestjs/common';
import {
  SignUpInput,
  SignInInput,
  CompanySignUpInput,
} from './dto/auth.inputs';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { lastValueFrom } from 'rxjs';
import { GraphQLError } from 'graphql';
import { Logger } from 'shared-functions';

@Injectable()
export class AuthService {
  constructor(private readonly RMQ: RabbitmqService) {}

  @Logger('green')
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
        throw new GraphQLError(response.error.message, {
          extensions: response.error,
        });
      }

      return response;
    } catch (error) {
      return error;
    }
  }

  @Logger('green')
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
        throw new GraphQLError(response.error.message, {
          extensions: response.error,
        });
      }

      return response;
    } catch (error) {
      return error;
    }
  }

  @Logger('green')
  async signIn(signInInput: SignInInput) {
    try {
      const response = await lastValueFrom(
        this.RMQ.rpcSend('authService', 'auth.user.signIn', signInInput),
      );

      if (response.error) {
        throw new GraphQLError(response.error.message, {
          extensions: response.error,
        });
      }

      return response;
    } catch (error) {
      return error;
    }
  }
}
