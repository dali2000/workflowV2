import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { notificationDTO } from './notification.dto';
import { Notif } from './notification.entity';

@Injectable()
export class NotificationService {
    constructor(
        @InjectRepository(Notif)
        private NotifRepository: Repository<Notif>,

    ){}
    async showAll(){
        return await this.NotifRepository.find({})
    }
    async showByUserId(userId:string){
        return await this.NotifRepository.find({where: {userId}});
    }
    async create(data:notificationDTO){
        const user = await this.NotifRepository.create(data);
        await this.NotifRepository.save(user);
        return user;
    }
    async destroy(id: string){
        await this.NotifRepository.delete(id);
        return {deleted: true};
    }


}
