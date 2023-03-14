import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Aeroporto } from "../model/aeroporto";

export class AeroportoController{
    async create(req: Request, res:Response){
        const { nome, codigo_voo }: { 
            nome: string, codigo_voo: number
          } = req.body;
          const aeroporto = new Aeroporto();
          aeroporto.nome = nome;
          aeroporto.codigo_voo = codigo_voo;
      
          const repo = AppDataSource.getRepository(Aeroporto);
          await repo.save(aeroporto);
      
          res.json(aeroporto);
        }

        async get(req: Request, res: Response) {
        
            const repo = AppDataSource.getRepository(Aeroporto);
            const aeroporto = await repo.find();
        
            res.json(aeroporto);
          }

        async getById(req: Request, res: Response) {
            const id = req.params.id;
        
            const repo = AppDataSource.getRepository(Aeroporto);
            const aeroporto = await repo.findOneBy({ codigo: parseInt(id) });
        
            res.json(aeroporto);
          }

          async update(req: Request, res: Response) {
            const id = req.params.id;
            const { nome } = req.body;
        
            const repo = AppDataSource.getRepository(Aeroporto);
            const aeroporto = await repo.findOneBy({ codigo: parseInt(id, 10) });
            aeroporto.nome = nome;
        
            await repo.save(aeroporto);
            res.json(aeroporto);
          }
        
          async delete(req: Request, res: Response) {
            const id = req.params.id;
        
            const repo = AppDataSource.getRepository(Aeroporto);
            await repo.delete(id);
            res.json({ message: "Sucesso ao deletar aeroporto" });
          }
          
}