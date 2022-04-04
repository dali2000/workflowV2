/* eslint-disable prettier/prettier */


import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Enterprise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()

  Name: string;

  @Column()
  location: string;
  
  @Column({unique: true})
  Email: string;



  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}

function Primary() {
  throw new Error('Function not implemented.');
}
