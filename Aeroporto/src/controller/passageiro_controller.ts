import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Passageiro } from "../model/passageiro";

export class PassageiroController{
    async create(req: Request, res:Response){
        const { nome }: { 
            nome: string
          } = req.body;
          const passageiro = new Passageiro();
          passageiro.nome = nome;
      
          const repo = AppDataSource.getRepository(Passageiro);
          await repo.save(passageiro);
      
          res.json(passageiro);
        }

        async get(req: Request, res: Response) {
            const id = req.params.id;
        
            const repo = AppDataSource.getRepository(Passageiro);
            const passageiro = await repo.find();
        
            res.json(passageiro);
          }

        async getById(req: Request, res: Response) {
            const id = req.params.id;
        
            const repo = AppDataSource.getRepository(Passageiro);
            const passageiro = await repo.findOneBy({ codigo: parseInt(id) });
        
            res.json(passageiro);
          }

          async update(req: Request, res: Response) {
            const id = req.params.id;
            const { nome } = req.body;
        
            const repo = AppDataSource.getRepository(Passageiro);
            const passageiro = await repo.findOneBy({ codigo: parseInt(id, 10) });
            passageiro.nome = nome;
        
            await repo.save(passageiro);
            res.json(passageiro);
          }
        
          async delete(req: Request, res: Response) {
            const id = req.params.id;
        
            const repo = AppDataSource.getRepository(Passageiro);
            await repo.delete(id);
            res.json({ message: "Sucesso ao deletar usuario" });
          }
          
}