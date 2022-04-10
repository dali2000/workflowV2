/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { workflowDTO } from './workflow.dto';
import { WorkflowService } from './workflow.service';
import { Response } from 'express';

@Controller('workflow')
export class WorkflowController {

    constructor(private WorkflowService: WorkflowService) { }

    @Get('workflows')// http://localhost:3000/workflow/workflows
    getWorkflows() {
        return this.WorkflowService.showAll();
    }

    @Post('addWorkflow')         // http://localhost:3000/workflow/addWorkflow
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

    @Get('getWorkflow/:id')       //http://localhost:3000/workflow/getWorkflow/1
    getWorkflow(@Param('id') id:string){
        return this.WorkflowService.showOne(id);
    }

    @Put('updateWorkflow/:id')
    async updateWorkflow(@Param('id') id:string, @Body() data:Partial<workflowDTO>,@Res ({passthrough: true}) res: Response){
        // return this.UserService.update(id, data);
     
        return this.WorkflowService.update(id, data);
        
    }
        
    @Delete('deleteWorkflow/:id')    // http://localhost:3000/workflow/deleteWorkflow/1
    async deleteWorkflow(@Param('id') id:string,@Res () res: Response){
        {   
            const workflow = await this.WorkflowService.destroyWorkflow(id);
             
            if(!workflow){
                res.status(404);
                res.json({
                    message: 'Workflow Not Found'
                });
            }else{

                res.status(200);
                res.json({
                    status: '200',
                    message: 'Workflow Deleted'
                });
            }
            
            
            return res;
            // return this.UserService.destroy(id);
            

        }
    }
    
}



