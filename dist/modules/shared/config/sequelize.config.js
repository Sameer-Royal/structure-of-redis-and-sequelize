"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeOptions = void 0;
exports.sequelizeOptions = [
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
        models: [],
        autoLoadModels: true,
    },
];
//# sourceMappingURL=sequelize.config.js.map