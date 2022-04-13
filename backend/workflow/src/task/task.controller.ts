import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { taskDTO } from './task.dto';
import { TaskService } from './task.service';
@Controller('task')
export class TaskController {

    constructor(private TaskService: TaskService) {

    }
    @Get('Alltasks')  // http://localhost:3000/task/Alltasks
    getAllTask() {
        return this.TaskService.showAll();
    }

    @Post('addTask')         // http://localhost:3000/task/addTask
    async addTask(@Body() data: taskDTO, @Res() res: Response) {

        const group= await this.TaskService.create(data);
        if (!group) {
            res.status(400);
            res.json({
                message: 'Error'
            });
        }
        else {

            res.json({
                status: '200',
                message: 'Group Created',
                data: group
            });
        }
    }




    //     return res;
    // }

    @Get('getTasks/:id')       // http://localhost:3000/task/getTasks/1

    getTasks(@Param('id') id: number) {
        return this.TaskService.showByIdUser(id);
    }
    @Get('getTask/:id')       // http://localhost:3000/task/getTask/1
    getTask(@Param('id') id: string) {
        return this.TaskService.showOne(id);
    }
    @Put('updateTask/:id')      // http://localhost:3000/task/updateTask/1
    updateTask(@Param('id') id:string, @Body() data:Partial<taskDTO>, @Res() res: Response){
         this.TaskService.update(id, data);
         if (this.TaskService.update(id, data)) {
            res.status(200);
            res.json({  
                status: '200',
                message: 'Task Updated',
                data:data
            });
        } else {
            res.status(404);
            res.json({
                message: 'Error'
            });
        }
    }
    @Delete('deleteTask/:id')    // http://localhost:3000/task/deleteTask/1
    deleteTask(@Param('id') id: string, @Res() res: Response) {
        {
            this.TaskService.destroy(id);
            if (this.TaskService.destroy(id)) {
                res.status(200);
                res.json({  
                    status: '200',
                    message: 'Task Deleted'
                });
            } else {
                res.status(404);
                res.json({
                    message: 'Task Not Found'
                });
            }


            return res;
            // return this.GroupService.destroy(id);


        }
    }

}
