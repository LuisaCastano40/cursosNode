//importamos dependencias según sistema de módulos ES6
import express from 'express';
// Importamos path para usar ciertas utilidades a la hora de trabajar con rutas
import path from 'path';

//Estoy creando una instancia de express y la asigno a app
//así se sabe que estamos haciendo un proyecto de node usando express
const app = express();


// nos permite obtener la ruta absoluta del directorio "public"
//path.join():se utiliza para unir segmentos de ruta en una sola ruta (process.cwd()) + ('public')
//process.cwd(): Ruta raíz desde donde se ejecuta el script Node.js.
//'public': nombre de la carpeta donde estan los archivos estáticos a los cuales queremos acceder (html, css, js, assets, etc)
const publicPath = path.join(process.cwd(), 'public');

// Configurar middleware para servir archivos estáticos desde la carpeta 'public'
// app.use(): Es un método que se utiliza para configurar middleware
// express.static(): Es una función que se utiliza para servir archivos estáticos
//publicPath: ruta absoluta (raíz de mis archivos)
app.use(express.static(publicPath));

// Ruta para index.html
// manejo de solicitud en una aplicación Node.js
app.get('/', (req, res) => {
    // req -> request - solicitud del cliente
    // res -> res - respuesta por parte del servidor
    // sendFile -> enviamos una ruta como respuesta
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Ruta para nosotros.html
app.get('/nosotros', (req, res) => {
  res.sendFile(path.join(publicPath, 'nosotros.html'));
});

const server = app.listen(3000, () => {
    // Imprimir el puerto en el que está corriendo el servidor
    console.log(`Servidor iniciado en http://localhost:3000`);
});

// Iniciar el servidor en un puerto dinámico o en el puerto 0
// Si el puerto es 0, se asignará un puerto disponible automáticamente
// const server = app.listen(0, () => {
//     // Imprimir el puerto en el que está corriendo el servidor
//     console.log('Servidor corriendo en el puerto: ', server.address().port);
// });


// const router = express.Router();

// router.get('/', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });

// router.get('/nosotros', (req, res) => {
//   res.sendFile(path.join(publicPath, 'nosotros.html'));
// });

// app.use(express.static(publicPath));
// app.use(router);