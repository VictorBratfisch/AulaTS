import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('voos')
export class Voo {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "text" })
  destino: string;
  
}