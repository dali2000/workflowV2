/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AppService } from './app.service';
import { Enterprise } from './enterprise/enterprise.entity';

@Controller()
export class AppController {
  

  constructor(private readonly appService: AppService){}
  @Get()
  getHello() {
    return this.appService.getHello();
  }


}


