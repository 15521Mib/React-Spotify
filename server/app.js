import express from 'express';
import conectaNaDb from './db.js';
import cors from 'cors';
import artistas from './models/Artistas.js';
import generos from './models/Generos.js';
import idades from './models/Idades.js';

const app = express();
app.use(cors(), express.json());
const conexao = await conectaNaDb();

conexao.on('error', (erro) => { 
    console.error('Erro ao conectar no MongoDB', erro);
});

conexao.once('open', () => {
    console.log('Conectado no MongoDB');
});

app.get('/artistas', async (req, res) => {
    const listaArtistas = await artistas.find({});
    res.status(200).json(listaArtistas);
});

app.get('/generos', async (req, res) => {
    const listaGeneros = await generos.find({});
    res.status(200).json(listaGeneros);
});

app.get('/idades', async (req, res) => {
    const listaIdades = await idades.find({});
    res.status(200).json(listaIdades);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

