import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Res, UnauthorizedException } from '@nestjs/common';
import { enterpriseDTO } from './enterprise.dto';
import { EnterpriseService } from './enterprise.service';
import * as bcrypt  from 'bcrypt';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
@Controller('enterprise')
export class EnterpriseController {
    constructor(private EnterpriseService: EnterpriseService,private jwtService: JwtService) {

    }
    @Get('Enterprise')  // http://localhost:3000/Enterprise
    getEnterprises() {
        return this.EnterpriseService.showAll();
    }
    // @Post('addUser')         // http://localhost:3000/user
    // addUser(@Body() data:enterpriseDTO){
    //     return this.EnterpriseService.create(data);
    // }
    @Post('addEnterprise')         // http://localhost:3000/user
    async addEnterprise(@Body() data: enterpriseDTO, @Res() res: Response) {

        const users = await this.EnterpriseService.showOneByEmail(data.Email);
        if (users) {
            res.status(400);
            res.json({
                message: 'User Already Exists'
            });
        }
        else {

            const HashPassword = await bcrypt.hash(data.password, 10);
            data.password = HashPassword;
            const user = await this.EnterpriseService.create(data);
            res.status(200);
            res.json({
                status: '200',
                message: 'User Created',
                data: user
            });
        }




        return res;
    }
    @Get('getEnterprise/:id')       // http://localhost:3000/user/getUser/1
    getEnterprise(@Param('id') id: string) {
        return this.EnterpriseService.showOne(id);
    }
    @Get('getEnterpriseEmail')       // http://localhost:3000/user/getUser/1
    getUserByEmail(@Body() data: enterpriseDTO) {
        return this.EnterpriseService.showOneByEmail(data.Email);
    }
    @Put('updateUser/:id')      // http://localhost:3000/user/updateUser/1
    updateUser(@Param('id') id:string, @Body() data:Partial<enterpriseDTO>){
        return this.EnterpriseService.update(id, data);
    }
    @Delete('deleteEnterprise/:id')    // http://localhost:3000/user/deleteUser/1
    deleteEnterprise(@Param('id') id: string, @Res() res: Response) {
        {
            this.EnterpriseService.destroy(id);
            if (this.EnterpriseService.destroy(id)) {
                res.status(200);
                res.json({  
                    status: '200',
                    message: 'User Deleted'
                });
            } else {
                res.status(404);
                res.json({
                    message: 'User Not Found'
                });
            }


            return res;
            // return this.EnterpriseService.destroy(id);


        }
    }
    @Post('login')
    async login(@Body() data: enterpriseDTO, @Res({ passthrough: true }) res: Response) {
        const user = await this.EnterpriseService.showOneByEmail(data.Email);

        if (!user || (!await bcrypt.compare(data.password, user.password))) {
            throw new UnauthorizedException('Invalid creadentials');
        }
        else{
            const jwt = await this.jwtService.sign({ user: user });
            
            return {
                jwt
            };
        }

        
    }

}
