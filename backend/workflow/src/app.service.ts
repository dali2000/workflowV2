/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnterpriseController } from './enterprise/enterprise.controller';
import { Enterprise } from './enterprise/enterprise.entity';


@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }
  



}
