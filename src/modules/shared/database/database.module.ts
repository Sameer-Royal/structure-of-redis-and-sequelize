import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeOptions } from '../config/sequelize.config';

@Module({
  imports: [
    ...sequelizeOptions.map((config) => SequelizeModule.forRoot(config)),
  ],
})
export class DatabaseModule {}
