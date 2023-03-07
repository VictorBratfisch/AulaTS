import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { Passageiro } from '../model/passageiro';

const AppDataSource = new DataSource({
  type: 'oracle',
  host: '192.168.0.50',
  port: 1521,
  username: 'system',
  password: 'pulsati2023',
  database: 'xe',
  entities: [Passageiro],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  synchronize: true,
});

export default AppDataSource;