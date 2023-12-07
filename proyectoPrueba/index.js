//importamos dependencias según sistema de módulos ES6
import express, { Router } from 'express';
//Estoy creando una instancia de express y la asigno a app
//así se sabe que estamos haciendo un proyecto de node usando express
const app = express();

// Creamos rutas
const rutas = express.Router();

//hago la peticion y establezco el endpoint 
rutas.get('/prueba', (req, res)=>{
    res.json({ mensaje: "funcionó"});
})

app.use('/bit', rutas);

app.listen(3000, ()=> {
    console.log('estoy funcionando')
})