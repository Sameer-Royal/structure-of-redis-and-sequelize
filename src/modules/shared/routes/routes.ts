import { UsersModule } from 'src/modules/users/users.module';

export const routes = [
  {
    path: '/user',
    module: UsersModule,
    children: [
      {
        path: '/marks',
        // module
      },
    ],
  },
];
