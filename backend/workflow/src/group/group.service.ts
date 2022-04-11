import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { groupDTO } from './group.dto';
import { Group } from './group.entity';

@Injectable()
export class GroupService {

    constructor(
        @InjectRepository(Group)
        private GroupRepository: Repository<Group>,

    ){}
    async showAll(){
        return await this.GroupRepository.find({
            
        })
    }
    async showOne(id: string){
     
        return await this.GroupRepository.findOne(id);
    }
    async showByIdEnterprise(enterpriseId: string){
        return await this.GroupRepository.find({where: {enterpriseId}});
    }

    async create(data:groupDTO){
        const group = await this.GroupRepository.create(data);
        await this.GroupRepository.save(group);
        return group;
    }
    async update(id: string, data:Partial<groupDTO>){
        await this.GroupRepository.update(id, data);
        return this.GroupRepository.findOne(id);
    }
    async destroy(id: string){
        await this.GroupRepository.delete(id);
        return {deleted: true};
    }


    
}
