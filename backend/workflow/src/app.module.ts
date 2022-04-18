/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { Task } from './task/task.entity';
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
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { NotifController } from './notification/notification.controller';
import { NotificationService } from './notification/notification.service';
import { NotificationModule } from './notification/notification.module';
import { Notif } from './notification/notification.entity';

@Module({
  imports: [UserModule,EnterpriseModule,WorkflowModule,GroupModule,TaskModule,NotificationModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'workflow',
      entities:[User,Enterprise,Workflow,Group,Task,Notif],
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
    TaskModule,
    NotificationModule,
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
