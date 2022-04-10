/* eslint-disable prettier/prettier */
import { CreateDateColumn, Entity, UpdateDateColumn } from "typeorm";
@Entity()
export class TimestampEntity {

    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}