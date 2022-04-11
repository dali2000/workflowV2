import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupController } from './group.controller';
import { Group } from './group.entity';
import { GroupService } from './group.service';

@Module({
    imports: [TypeOrmModule.forFeature([Group]),

  ],
    controllers: [GroupController],
    exports: [],
    providers: [GroupService]
})
export class GroupModule {}