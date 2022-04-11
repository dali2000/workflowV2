/* eslint-disable prettier/prettier */


import { Enterprise } from 'src/enterprise/enterprise.entity';
import { UserRoleEnum } from 'src/enums/UserRoleEnum';
import { TimestampEntity } from 'src/Generaics/timestamp.entities';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToMany, ManyToOne, OneToMany, JoinTable } from 'typeorm';

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
  
  @OneToMany(()=>User,user=>user.id)
  @JoinTable()
  user:User[]

}

function Primary() {
  throw new Error('Function not implemented.');
}
