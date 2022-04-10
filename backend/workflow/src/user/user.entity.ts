/* eslint-disable prettier/prettier */


import { type } from 'os';
import { Enterprise } from 'src/enterprise/enterprise.entity';
import { UserRoleEnum } from 'src/enums/UserRoleEnum';
import { TimestampEntity } from 'src/Generaics/timestamp.entities';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User extends TimestampEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()

  firstName: string;

  @Column()
  lastName: string;
  
  @Column({unique: true})
  Email: string;

  @Column({
    type: 'enum',
    enum:UserRoleEnum,
  default:UserRoleEnum.User})
  role: string;

  @Column()
  password: string;

  @Column()
  location: string;

  @Column()
  phoneNumber: string;

  @Column({ default: true })
  isActive: boolean;

}

function Primary() {
  throw new Error('Function not implemented.');
}
