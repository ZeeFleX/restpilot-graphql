import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class RabbitmqService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: ClientProxy,
    @Inject('MENU_SERVICE') private readonly menuService: ClientProxy,
  ) {}

  rpcSend(
    service: string,
    pattern: string,
    data: object = {},
  ): Observable<any> {
    try {
      return this[service].send(pattern, data);
    } catch (error) {
      throw error;
    }
  }
}
