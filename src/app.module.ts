import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitmqModule } from './rabbitmq/rabbirtmq.module';

@Module({
  imports: [RabbitmqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
