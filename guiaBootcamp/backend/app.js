console.log('hola desarrolladores');
//Importacion
import express from 'express';
import dotenv from 'dotenv';

//Configuramos servidor t variables de entorno
const app = express();
dotenv.config();

//creamos una variable para nuestro puerto
const port = process.env.PORT;

app.get('/', (req, res)=>{
    res.send('HOLA, ESTA ES UNA PETICION A MI SERVIDOR');
});

//Escuchamos nuestro servidor
app.listen(port, ()=>{
    console.log(`El servidor se está escuchando en http://localhost:${port}`);
});