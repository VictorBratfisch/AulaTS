import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('victor_voos')
export class Voo {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false})
  destino: string;
  
}