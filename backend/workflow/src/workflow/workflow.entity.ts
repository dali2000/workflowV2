/* eslint-disable prettier/prettier */


import { TimestampEntity } from 'src/Generaics/timestamp.entities';
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Workflow extends TimestampEntity {
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
