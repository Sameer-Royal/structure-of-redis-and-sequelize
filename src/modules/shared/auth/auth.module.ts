import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      global: true,
      secret: 'SameerDon',
      signOptions: { expiresIn: '5000s' },
    }),
  ],
  exports: [],
})
export class AuthModule {}
