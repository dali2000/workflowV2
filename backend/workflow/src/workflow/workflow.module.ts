import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkflowController } from './workflow.controller';
import { Workflow } from './workflow.entity';
import { WorkflowService } from './workflow.service';

@Module({
    imports: [TypeOrmModule.forFeature([Workflow])],
    controllers: [WorkflowController],
    exports: [],
    providers: [WorkflowService]
  })
export class WorkflowModule {}
