/* eslint-disable prettier/prettier */


import { IsEmail, IsNotEmpty } from 'class-validator';
import { TimestampEntity } from 'src/Generaics/timestamp.entities';
import { Group } from 'src/group/group.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany, JoinTable, JoinColumn } from 'typeorm';

@Entity()
export class Enterprise extends TimestampEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  Name: string;

  @Column() 
  location: string;
  
  @Column({unique: true})
  @IsEmail()
  Email: string;

  @Column()
  @IsNotEmpty()
  nbJour: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  @IsNotEmpty()
  dateDeb: Date;
  @Column()
  @IsNotEmpty()
  dateFin: Date;


  @OneToMany(()=>Group,group=>group.id)
  @JoinTable()
  group:Group[]

  @OneToMany(()=>User,user=>user.id)
  @JoinTable()
  user:User[]
}

function Primary() {
  throw new Error('Function not implemented.');
}
