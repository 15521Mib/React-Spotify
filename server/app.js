import cors from 'cors';
import express from 'express';
import conectTDb from './db.js';


const app = express();
app.use(cors());
const conexao = await conectTDb()

conexao.on('error', (erro) => {
    console.error('Erro ao conectar', erro)
})

conexao.once('open', () => {
    console.log('Conectando no MongoDB')
})
app.listen(3000, () => {
    console.log('Servidor rodando')
})