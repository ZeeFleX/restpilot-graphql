import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { RabbitmqService } from "./rabbitmq.service";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        RabbitMQModule.forRoot(RabbitMQModule, {
            exchanges: [
                {
                    name: 'auth-exchange',
                    type: 'direct',
                    createExchangeIfNotExists: true
                }
            ],
            queues: [
                {
                    name: 'auth-queue',
                    createQueueIfNotExists: true,
                    routingKey: 'authService',
                    exchange: 'auth-exchange'
                }
            ],
            uri: process.env.RABBITMQ_URI,
            enableControllerDiscovery: false
        })
    ],
    providers: [RabbitmqService],
    exports: [RabbitmqService]
})
export class RabbitmqModule {}