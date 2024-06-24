const express = require('express');
const path = require('path');


const startServer = (options) => {
    const {port, publich_path = 'public'} = options;
    
    const app = express();
    //se necesita el .use para usar middlewares
    app.use(express.static(publich_path)) //contenido estático que ponemos disponible

    //al ser un servidor, debemos recibir una petición, cuando el navegador hace la petición, nosotros le devolvemos la web
    //* -> single Page Application, cualquier ruta me lleva al index.html
    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${publich_path}/index.html`);
        res.sendFile(indexPath);
    })

    //poner disponible a nuestro navegador -> abrir el puerto y estar escuchando por ahí
    app.listen(port, ()=>{
        console.log(`Escuchando en el puerto ${port}`);
    })
}


/*
    NOTAS:
    Definimos la variable de entorno públic, para yo poder definir como quiera, dónde se encuentra el contenido estático que quiero que el servidor muestre


*/

module.exports = {
    startServer
}