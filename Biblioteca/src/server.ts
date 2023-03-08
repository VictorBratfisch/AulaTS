const express = require('express');
const app = express();
app.use(express.json());

import AppDataSource from './config/Database';
import { AutorController } from './controller/autor_controller';


AppDataSource.initialize().then(() => {
    console.log('Conectado com sucesso ao banco');
    const app = express();
    app.use(express.json());

    app.post('/passageiro', new AutorController().create);
    app.get('/passageiro', new AutorController().get)
    app.get('/passageiro/:id', new AutorController().getById);
    app.put('/passageiro/:id', new AutorController().update);
    app.delete('/passageiro/:id', new AutorController().delete);

app.listen(8000);
}).catch(e => console.log('Erro ao conectar ao banco: ', e))