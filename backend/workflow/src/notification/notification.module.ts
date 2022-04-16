import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotifController } from './notification.controller';
import { Notif } from './notification.entity';
import { NotificationService } from './notification.service';

@Module({
    imports: [TypeOrmModule.forFeature([Notif]),

],
  controllers: [NotifController],
  exports: [],
  providers: [NotificationService]
})
export class NotificationModule {}
