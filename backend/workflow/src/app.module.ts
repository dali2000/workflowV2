/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { Enterprise } from './enterprise/enterprise.entity';


@Module({
  imports: [UserModule,EnterpriseModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'workflow',
      entities:[User,Enterprise],
      synchronize: true,
      
      logging: false
    }),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    EnterpriseModule,
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
