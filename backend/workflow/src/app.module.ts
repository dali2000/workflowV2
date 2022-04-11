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
import { WorkflowController } from './workflow/workflow.controller';

import { WorkflowModule } from './workflow/workflow.module';
import { Workflow } from './workflow/workflow.entity';
import { GroupController } from './group/group.controller';
import { GroupService } from './group/group.service';
import { GroupModule } from './group/group.module';
import { Group } from './group/group.entity';


@Module({
  imports: [UserModule,EnterpriseModule,WorkflowModule,GroupModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'workflow',
      entities:[User,Enterprise,Workflow,Group],
      synchronize: true,
      
      logging: false
    }),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    EnterpriseModule,
    WorkflowModule,
    GroupModule,
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
