import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Autor } from "../model/autor";

export class AutorController{
    async create(req: Request, res:Response){
        const { nome, sobrenome, data_nascimento }: { 
            nome: string, sobrenome: string, data_nascimento: Date
          } = req.body;
          const autor = new Autor();
          autor.nome = nome;
          autor.sobrenome = sobrenome;
          autor.data_nascimento = data_nascimento;

      
          const repo = AppDataSource.getRepository(Autor);
          await repo.save(autor);
      
          res.json(autor);
        }

        async get(req: Request, res: Response) {
            const id = req.params.id;
        
            const repo = AppDataSource.getRepository(Autor);
            const autor = await repo.find();
        
            res.json(autor);
          }

        async getById(req: Request, res: Response) {
            const id = req.params.id;
        
            const repo = AppDataSource.getRepository(Autor);
            const autor = await repo.findOneBy({ codigo: parseInt(id) });
        
            res.json(autor);
          }

          async update(req: Request, res: Response) {
            const id = req.params.id;
            const { nome, sobrenome, data_nascimento } = req.body;
        
            const repo = AppDataSource.getRepository(Autor);
            const autor = await repo.findOneBy({ codigo: parseInt(id, 10) });
            autor.nome = nome;
            autor.sobrenome = sobrenome;
            autor.data_nascimento = data_nascimento;
        
            await repo.save(autor);
            res.json(autor);
          }
        
          async delete(req: Request, res: Response) {
            const id = req.params.id;
        
            const repo = AppDataSource.getRepository(Autor);
            await repo.delete(id);
            res.json({ message: "Sucesso ao deletar usuario" });
          }
          
}