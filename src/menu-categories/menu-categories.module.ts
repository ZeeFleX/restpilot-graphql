import { Module } from '@nestjs/common';
import { MenuCategoriesService } from './menu-categories.service';
import { MenuCategoriesResolver } from './menu-categories.resolver';

@Module({
  providers: [MenuCategoriesResolver, MenuCategoriesService],
})
export class MenuCategoriesModule {}
