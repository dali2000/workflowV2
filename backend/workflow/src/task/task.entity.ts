/* eslint-disable prettier/prettier */


import { IsEmail, IsNotEmpty } from 'class-validator';
import { TaskStatutEnum } from 'src/enums/TaskStatutEnum';
import { TimestampEntity } from 'src/Generaics/timestamp.entities';
import { Group } from 'src/group/group.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, JoinTable, JoinColumn, OneToOne, ManyToOne } from 'typeorm';

@Entity()
export class Task extends TimestampEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    Name: string;

    @Column()
    dueDate: Date
    @Column({
        type: 'enum',
        enum: TaskStatutEnum,
        default: TaskStatutEnum.ToDo
      })
    statut: string;
    @Column()
    userId: number;
    @Column({ default: false})
    valid:boolean;
    @ManyToOne(() => User )
    @JoinTable()
    user: User[];





}

function Primary() {
    throw new Error('Function not implemented.');
}
