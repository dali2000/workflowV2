import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { taskDTO } from './task.dto';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
    
    constructor(
        @InjectRepository(Task)
        private TaskRepository: Repository<Task>,

    ){}
    async showAll(){
        return await this.TaskRepository.find({
            
        })
    }
    async showOne(id: string){
     
        return await this.TaskRepository.findOne(id);
    }
    async showByIdUser(userId: number){
        return await this.TaskRepository.find({where: {userId}});
    }

    async create(data:taskDTO){
        const group = await this.TaskRepository.create(data);
        await this.TaskRepository.save(group);
        return group;   
    }
    async update(id: string, data:Partial<taskDTO>){
        await this.TaskRepository.update(id, data);
        return this.TaskRepository.findOne(id);
    }
    async destroy(id: string){
        await this.TaskRepository.delete(id);
        return {deleted: true};
    }
    



}
