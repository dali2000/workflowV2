/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { enterpriseDTO } from './enterprise.dto';
import { Enterprise } from './enterprise.entity';

@Injectable()
export class EnterpriseService {
    constructor(
        @InjectRepository(Enterprise)
        private EnterpriseRepository: Repository<Enterprise>,

    ){}
    async showAll(){
        return await this.EnterpriseRepository.find({
            
        })
    }
    async showOne(id: string){
     
        return await this.EnterpriseRepository.findOne(id);
    }
    async showOneByEmail(Email: string){
        return await this.EnterpriseRepository.findOne({where: {Email}});
    }
    async create(data:enterpriseDTO){
        const user = await this.EnterpriseRepository.create(data);
        await this.EnterpriseRepository.save(user);
        return user;
    }
    async update(id: string, data:Partial<enterpriseDTO>){
        await this.EnterpriseRepository.update(id, data);
        return this.EnterpriseRepository.findOne(id);
    }
    async destroy(id: string){
        await this.EnterpriseRepository.delete(id);
        return {deleted: true};
    }


    
}
