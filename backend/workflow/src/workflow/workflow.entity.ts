/* eslint-disable prettier/prettier */


import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Workflow {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    Name: string;
    @Column()
    Description: String;
    @Column()
    Type:string
    @Column()
    DateAjout:String
}

function Primary() {
    throw new Error('Function not implemented.');
}
