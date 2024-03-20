"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const users_module_1 = require("../../users/users.module");
exports.routes = [
    {
        path: '/user',
        module: users_module_1.UsersModule,
        children: [
            {
                path: '/marks',
            },
        ],
    },
];
//# sourceMappingURL=routes.js.map