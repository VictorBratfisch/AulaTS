import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('victor_aeroportoTS')
export class Aeroporto{
    @PrimaryGeneratedColumn()
    codigo: number;

@Column({type: "varchar2", nullable: false})
nome: string;

@Column({ type: "integer", nullable: true })
  codigo_voo: number;
}