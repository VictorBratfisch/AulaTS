const express = require('express');
const app = express();
app.use(express.json());

import AppDataSource from './config/Database';
import { AeroportoController } from './controller/aeroporto_controller';
import { VooController } from './controller/voo_controller';


AppDataSource.initialize().then(() => {
    console.log('Conectado com sucesso ao banco :)');
    const app = express();
    app.use(express.json());

    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        next();
      });

    app.post('/aeroporto', new AeroportoController().create);
    app.get('/aeroporto', new AeroportoController().get)
    app.get('/aeroporto/:id', new AeroportoController().getById);
    app.put('/aeroporto/:id', new AeroportoController().update);
    app.delete('/aeroporto/:id', new AeroportoController().delete);

    app.get('/voo', new VooController().list);

app.listen(8000);
}).catch(e => console.log('Erro ao conectar ao banco: ', e))