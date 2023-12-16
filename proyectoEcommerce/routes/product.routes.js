// Importación de dependencias
import express from 'express';
import { getProduct, postProduct, putProduct, deleteProduct } from '../controllers/product.controllers.js';

// definimos la variable para nuestras rutas
const productRouter = express.Router();


// Defimimos nuestras rutas

// ruta para mostrar productos
productRouter.get('/obtenerProducto', getProduct);

// ruta para crear productos
productRouter.post('/crearProducto', postProduct);

// ruta para actualizar productos por id
productRouter.put('/actualizarProducto/:_id', putProduct);

// ruta para eliminar productos
productRouter.delete('/eliminarProducto/:_id', deleteProduct);


// Exportamos las rutas
export default productRouter;