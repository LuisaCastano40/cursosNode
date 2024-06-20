console.log('hola desde app.js');

//Importar forma anterior CommonJS
const {getAuthor, getTitle} = require('./functions.js');
const curso = require('./objects.js');

console.log(getTitle(), getAuthor('luisa'));
console.log(curso.titulo, curso.nombre);

//Importar forma E6
/*
import {getAuthor, getTitle} from './functions.js';
import curso from './objects.js';
*/