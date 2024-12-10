import { Module } from '@nestjs/common';
import { MenuCategoriesService } from './menu-categories.service';
import { MenuCategoriesResolver } from './menu-categories.resolver';
import { RabbitmqModule } from 'src/rabbitmq/rabbirtmq.module';

@Module({
  imports: [RabbitmqModule],
  providers: [MenuCategoriesResolver, MenuCategoriesService],
})
export class MenuCategoriesModule {}
