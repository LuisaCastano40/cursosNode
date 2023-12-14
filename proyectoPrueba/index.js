//importamos dependencias según sistema de módulos ES6
import express, { Router } from 'express';
// importamos conexión a base de datos
import conexionMongo from './config/db.js';

// Configuramos dotenv para usar las variables de estado
import dotenv from "dotenv";
dotenv.config();


//Estoy creando una instancia de express y la asigno a app
//así se sabe que estamos haciendo un proyecto de node usando express
const app = express();
// ejecutamos nuestra función de conexión
conexionMongo();

// Creamos rutas
const rutas = express.Router();

//hago la peticion y establezco el endpoint 
rutas.get('/prueba', (req, res)=>{
    res.json({ mensaje: "funciono bien"});
})
rutas.get('/prueba2', (req, res)=>{
    res.json({ mensaje: "funciono bien x2"});
})

app.use('/bit', rutas);

app.listen(3000, ()=> {
    console.log('estoy funcionando')
})