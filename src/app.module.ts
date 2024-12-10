import { Module } from '@nestjs/common';
import { RabbitmqModule } from './rabbitmq/rabbirtmq.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MenuCategoriesModule } from './menu-categories/menu-categories.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    RabbitmqModule,
    MenuCategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
