import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { workflowDTO } from './workflow.dto';
import { WorkflowService } from './workflow.service';
import { Response } from 'express';

@Controller('workflow')
export class WorkflowController {

    constructor(private WorkflowService: WorkflowService) { }

    @Get('workflows')
    getWorkflows() {
        return this.WorkflowService.showAll();
    }

    @Post('addWorkflow')         // http://localhost:3000/user
    async addWorkflow(@Body() data: workflowDTO, @Res() res: Response) {

        const workflow = await this.WorkflowService.create(data);
        if (workflow) {
            res.status(200);
            res.json({
                status: '200',
                message: 'Workflow added',
                data: data
            });
        }
        else {
            res.status(400);
            res.json({
                status: '400',
                message: 'error',
                data: data
            });
        }
        return res;
    }
        
    
}



