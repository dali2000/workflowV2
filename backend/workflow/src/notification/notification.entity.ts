import { Enterprise } from 'src/enterprise/enterprise.entity';
import { TimestampEntity } from 'src/Generaics/timestamp.entities';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToMany, ManyToOne, OneToMany, JoinTable } from 'typeorm';

@Entity()
export class Notif extends TimestampEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Description: string;
  @Column()
  userId:number
  @ManyToOne(()=>User,user =>user.id)
  user:User

  // @ManyToOne(()=>Enterprise,enterprise =>enterprise.id)
  // enterprise:Enterprise
}

function Primary() {
  throw new Error('Function not implemented.');
}
