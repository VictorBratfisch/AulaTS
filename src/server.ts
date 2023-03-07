const express = require('express');
const app = express();
app.use(express.json());

import AppDataSource from './config/Database';
import { PassageiroController } from './controller/passageiro_controller';


AppDataSource.initialize().then(() => {
    console.log('Conectado com sucesso ao banco');
    const app = express();
    app.use(express.json());

    app.post('/passageiro', new PassageiroController().create);
    app.get('/passageiro/:id', new PassageiroController().get);
    app.put('/passageiro/:id', new PassageiroController().update);
    app.delete('/passageiro/:id', new PassageiroController().delete);

app.listen(8000);
}).catch(e => console.log('Erro ao conectar ao banco: ', e))