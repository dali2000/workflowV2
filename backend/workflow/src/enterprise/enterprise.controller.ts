/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Res, UnauthorizedException } from '@nestjs/common';
import { enterpriseDTO } from './enterprise.dto';
import { EnterpriseService } from './enterprise.service';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
@Controller('enterprise')
export class EnterpriseController {
    constructor(private EnterpriseService: EnterpriseService, private jwtService: JwtService) {

    }
    @Get('Enterprise')  // http://localhost:3000/enterprise/Enterprise
    getEnterprises() {
        return this.EnterpriseService.showAll();
    }
    // @Post('addUser')         // http://localhost:3000/user
    // addUser(@Body() data:enterpriseDTO){
    //     return this.EnterpriseService.create(data);
    // }
    @Post('addEnterprise')         // http://localhost:3000/addEnterprise
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
   
    
    @Put('updateEnterprise/:id')      // http://localhost:3000/Enterprise/updateEnterprise/1
    updateUser(@Param('id') id: string, @Body() data: Partial<enterpriseDTO>) {
        return this.EnterpriseService.update(id, data);
    }


    @Put('updateEnterpris/:id')      // http://localhost:3000/enterprise/updateEnterprise/1
    async  updateUsere(@Param('id') id: string, @Body() data: Partial<enterpriseDTO>,@Res ({passthrough: true}) res: Response) {
        const enterprise = await this.EnterpriseService.update(id, data);;
        const jwt = await this.jwtService.sign({enterprise: enterprise});

        return {
            jwt
        };
      
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

        if (new Date() > user.dateFin) {

            this.updateUser(user.id.toString(), { isActive: false });
            this.updateUser(user.id.toString(), { nbJour: '0' });

        }
        else {

            // console.log(user.isActive);
             console.log(new Date()==user.dateFin)
             console.log(user.dateFin.getDate()-new Date().getDate())
             const nb=user.dateFin.getDate()-new Date().getDate();
             this.updateUser(user.id.toString(), { nbJour: nb.toString() });
            if (!user || (!await bcrypt.compare(data.password, user.password))) {
                throw new UnauthorizedException('Invalid creadentials');
            }
            else {

                if (user.isActive == true) {
                    const jwt = await this.jwtService.sign({ user: user });


                    return {
                        jwt
                    };
                }
                else {
                    throw new UnauthorizedException('User is not active');
                }

            }


        }
    }




}
