import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Res, UnauthorizedException } from '@nestjs/common';
import { notificationDTO } from './notification.dto';
import { NotificationService } from './notification.service';
import { Response } from 'express';
@Controller('Notification')
export class NotifController {
    constructor(private NotifService: NotificationService) {}
    @Get('getNotif')  // http://localhost:3000/notification/getNotif
    getNotif() {
        return this.NotifService.showAll();
 
    }

    @Post('addNotif')         // http://localhost:3000/notification/addNotif
    async addNotif(@Body() data: notificationDTO, @Res() res: Response) {

        const notif= await this.NotifService.create(data);
        if (!notif) {
            res.status(400);
            res.json({
                message: 'Error'
            });
        }
        else {

            res.json({
                status: '200',
                message: 'Group Created',
                data: notif
            });
        }
    }


    //     return res;
    // }

    @Get('getNotifs')       // http://localhost:3000/notification/getNotifs/1
    getNotifs() {
         this.NotifService.showByUserId();

    }


    @Get('getById/:id')       // http://localhost:3000/notification/getNotifs/1
    getById(@Param('id') id: string) {
         this.NotifService.showById(id);

    }



    @Delete('deleteNotif/:id')    // http://localhost:3000/notification/deleteNotif/1
    deleteNotif(@Param('id') id: string, @Res() res: Response) {
        {
            this.NotifService.destroy(id);
            if (this.NotifService.destroy(id)) {
                res.status(200);
                res.json({  
                    status: '200',
                    message: 'notif Deleted'
                });
            } else {
                res.status(404);
                res.json({
                    message: 'notif Not Found'
                });
            }


            return res;
            // return this.NotifService.destroy(id);


        }
    }
}
