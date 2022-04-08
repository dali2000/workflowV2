import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { workflowDTO } from './workflow.dto';
import { Workflow } from './workflow.entity';

@Injectable()
export class WorkflowService {
    constructor(
        @InjectRepository(Workflow)
        private WorkflowRepository: Repository<Workflow>,

    ){}
    async showAll(){
        return await this.WorkflowRepository.find()
    }
    async showOne(id: string){
     
        return await this.WorkflowRepository.findOne({where: {id}});
    }

    async create(data:workflowDTO){
        const workflow = await this.WorkflowRepository.create(data);
        await this.WorkflowRepository.save(workflow);
        
        return workflow;
    }
    async update(id: string, data:Partial<workflowDTO>){
        await this.WorkflowRepository.update(id, data);
        return this.WorkflowRepository.findOne(id);
    }
    async destroyWorkflow(id: string){
        await this.WorkflowRepository.delete(id);
        return {deleted: true};
    }


}
