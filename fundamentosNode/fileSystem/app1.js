//File System con node.js
//Me permite leer y escribir archivos

const fs = require('fs');

//Me lee mi archivo
//Sync -> sincrónico -> porque lo tengo en mi computador
const archivo = fs.readFileSync('archivo.txt', 'utf-8');
console.log(archivo);

//Voy a modificar mi archivo
//ig -> i para ignorar mayúsculas y minúsculas y la g de forma global
const archivoModificado = archivo.replace(/leer/ig, 'modificar');

//me crea una copia de archivo
fs.writeFileSync('archivo-copy.txt', archivo);
//me crea un archivo con las caracteristicas modificadas
fs.writeFileSync('archivo-modified.txt', archivoModificado);