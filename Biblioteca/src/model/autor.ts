import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('victor_autores2')
export class Autor{
    @PrimaryGeneratedColumn()
    codigo: number;

@Column({type: "varchar2", nullable: false})
nome: string;

@Column({type: "varchar2"})
sobrenome: string;

@Column({type: "date"})
data_nascimento: Date;
}

