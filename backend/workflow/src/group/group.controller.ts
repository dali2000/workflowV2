import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Res, UnauthorizedException } from '@nestjs/common';

import * as bcrypt  from 'bcrypt';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { GroupService } from './group.service';
import { groupDTO } from './group.dto';

@Controller('group')
export class GroupController {
    constructor(private GroupService: GroupService) {

    }
    @Get('Groups')  // http://localhost:3000/group/Groups
    getEnterprises() {
        return this.GroupService.showAll();
    }

    @Post('addGroup')         // http://localhost:3000/group/addGroup
    async addGroup(@Body() data: groupDTO, @Res() res: Response) {

        const group= await this.GroupService.create(data);
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
    @Get('getGroups/:id')       // http://localhost:3000/group/getGroup/1
    getGroups(@Param('id') id: string) {
        return this.GroupService.showByIdEnterprise(id);
    }
    @Get('getGroup/:id')       // http://localhost:3000/group/getGroup/1
    getGroup(@Param('id') id: string) {
        return this.GroupService.showOne(id);
    }
    @Put('updateGroup/:id')      // http://localhost:3000/group/updateGroup/1
    updateGroup(@Param('id') id:string, @Body() data:Partial<groupDTO>, @Res() res: Response){
         this.GroupService.update(id, data);
         if (this.GroupService.update(id, data)) {
            res.status(200);
            res.json({  
                status: '200',
                message: 'Group Updated'
            });
        } else {
            res.status(404);
            res.json({
                message: 'Error'
            });
        }
    }
    @Delete('deleteGroup/:id')    // http://localhost:3000/group/deleteGroup/1
    deleteGroup(@Param('id') id: string, @Res() res: Response) {
        {
            this.GroupService.destroy(id);
            if (this.GroupService.destroy(id)) {
                res.status(200);
                res.json({  
                    status: '200',
                    message: 'Group Deleted'
                });
            } else {
                res.status(404);
                res.json({
                    message: 'Group Not Found'
                });
            }


            return res;
            // return this.GroupService.destroy(id);


        }
    }

}
