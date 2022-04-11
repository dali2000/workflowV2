/* eslint-disable prettier/prettier */


import { Enterprise } from 'src/enterprise/enterprise.entity';
import { UserRoleEnum } from 'src/enums/UserRoleEnum';
import { TimestampEntity } from 'src/Generaics/timestamp.entities';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class Group extends TimestampEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Description: string;

  
  @Column()
  enterpriseId:number
  @ManyToOne(()=>Enterprise,enterprise =>enterprise.id)
  enterprise:Enterprise

}

function Primary() {
  throw new Error('Function not implemented.');
}
