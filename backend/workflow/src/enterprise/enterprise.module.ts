/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnterpriseController } from './enterprise.controller';
import { Enterprise } from './enterprise.entity';
import { EnterpriseService } from './enterprise.service';

@Module({
  imports: [TypeOrmModule.forFeature([Enterprise]),
  JwtModule.register({
    secret: 'secret',
    signOptions: { expiresIn: '1d' },
  })
],
  controllers: [EnterpriseController],
  exports: [],
  providers: [EnterpriseService]
})
export class EnterpriseModule {

  
}
