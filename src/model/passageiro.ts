import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('victor_passageiros2')
export class Passageiro{
    @PrimaryGeneratedColumn()
    codigo: number;

@Column({type: "varchar2", nullable: false})
nome: string;
}