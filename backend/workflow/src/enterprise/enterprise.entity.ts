/* eslint-disable prettier/prettier */


import { type } from 'os';
import { TimestampEntity } from 'src/Generaics/timestamp.entities';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Enterprise extends TimestampEntity  {
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

  @Column()
  dateDeb: Date;
  @Column()
  dateFin: Date;

}

function Primary() {
  throw new Error('Function not implemented.');
}
