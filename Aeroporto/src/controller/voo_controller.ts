import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Aeroporto } from "../model/aeroporto";

export class VooController {
  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Aeroporto);
    const voos = await repo.find();
    res.json(voos);
  }
}