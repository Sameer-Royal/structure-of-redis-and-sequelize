import { SequelizeModuleOptions } from '@nestjs/sequelize';
export const sequelizeOptions: SequelizeModuleOptions[] = [
  {
    name: 'connection',
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'user1',
    password: '',
    database: '',
    autoLoadModels: true,
  },
  {
    name: 'connection2',
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'user1',
    password: '',
    database: '',
    //mannual import module
    models:[],
    //auto import module
    autoLoadModels: true,
  },
];
