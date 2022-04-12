/* eslint-disable prettier/prettier */


import { Enterprise } from 'src/enterprise/enterprise.entity';
import { UserRoleEnum } from 'src/enums/UserRoleEnum';
import { TimestampEntity } from 'src/Generaics/timestamp.entities';
import { Group } from 'src/group/group.entity';
import { Task } from 'src/task/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToMany, ManyToOne, OneToMany, JoinTable } from 'typeorm';

@Entity()
export class User extends TimestampEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()

  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  Email: string;

  @Column({
    type: 'enum',
    enum: UserRoleEnum,
    default: UserRoleEnum.User
  })
  role: string;

  @Column()
  password: string;

  @Column()
  location: string;

  @Column()
  phoneNumber: string;

  @Column ({ default: true})
  isActive: boolean;

  
  @Column({default:null})
  groupId:number
  @ManyToOne(()=>Group,group =>group.id)
  group:Group
  
  @OneToMany(()=>Task,task=>task.id)
  @JoinTable()
  task:Task[]
}

function Primary() {
  throw new Error('Function not implemented.');
}
