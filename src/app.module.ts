import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/shared/database/database.module';
import { RouterModule } from '@nestjs/core';
import { routes } from './modules/shared/routes/routes';

@Module({
  imports: [DatabaseModule, RouterModule.register(routes)],
  controllers: [],
  providers: [],
})
export class AppModule {}
