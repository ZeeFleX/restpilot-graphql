import { Injectable } from '@nestjs/common';
import { SignupInput, SigninInput } from './dto/auth.inputs';
import { RabbitmqService } from 'src/rabbitmq/rabbitmq.service';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private readonly RMQ: RabbitmqService) {}

  async signup(signupInput: SignupInput) {
    try {
      const response = await lastValueFrom(
        this.RMQ.rpcSend('authService', 'user.signup', signupInput),
      );

      console.log(response);

      if (response.error) {
        throw new Error(response.error.message);
      }

      return response;
    } catch (error) {
      console.log(error);
      throw new Error(`Registration failed: ${error.message}`);
    }
  }

  async signin(signinInput: SigninInput) {
    try {
      const response = await lastValueFrom(
        this.RMQ.rpcSend('authService', 'user.signin', signinInput),
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
