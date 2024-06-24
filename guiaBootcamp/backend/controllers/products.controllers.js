//1. Importamos los modulos o dependencias que necesitamos
import { productModel } from '../models/products.model.js';


//Prueba inicial de mis controladores

//Petición GET -> me muestra TODOS los productos
export const getProducts = async(req, res) => {
    try{
        let products = await productModel.find();
        //validación si no hay elementos
        if(products.length === 0){
            //La solicitud ha tenido éxito, pero no hay contenido que devolver.
            return res.status(204).json();
        }

        return res.send(products);
    }catch(error){
        //error inesperado en el servidor
        res.status(500).json({ message: error.message });
    }
}

//petición GET de un producto
export const getProductById = async(req, res) =>{
    try{
        let idForGet = req.params._id
        let product = await productModel.findById(idForGet);
        //validar si no se encuentra un producto
        if(!product){
            return res.status(404).json({message:'El libro no fue encontrado'})
        }
        return res.send(product);

    } catch{
        //error inesperado en el servidor
        res.status(500).json({ message: error.message });
    }
}

//Petición POST -> me crea los productos uno por uno
export const postProduct = async(req, res) => {
    const { nombre, imagen, precio } = req.body;

    //validar que se ingresen todos los datos
    if (!nombre || !imagen || !precio) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const newProduct = await productModel.create(req.body);
        // La solicitud ha tenido éxito y se ha creado un nuevo recurso. 
        return res.status(201).json(newProduct);
    } catch (error) {
        // La solicitud contiene sintaxis incorrecta o no puede ser procesada.
        return res.status(400).json({ message: error.message });
    }
}

//Petición DELETE -> me elimina los productos por ID
export const deleteProductById = async(req, res) => {
    try {
        let idForDelete = req.params._id
        let productDelete = await productModel.findByIdAndDelete(idForDelete)

        if (!productDelete) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        } 

         // Si el producto fue eliminado correctamente, retornar 200 OK
         return res.status(200).json({ message: `Producto eliminado correctamente` });

    } catch (error) {
        //error inesperado en el servidor
        res.status(500).json({ message: error.message });
    }
}

//Petición PUT -> me actualiza los productos por ID
export const putProductById = async(req, res) => {
    try {
        let dataForUpdate = req.body;
        let idForUpdate = req.params._id;
        const updatedProduct = await productModel.findByIdAndUpdate(idForUpdate, dataForUpdate);

        //recurso solicitado no se encuentra.
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        //La solicitud ha tenido éxito. 
        return res.status(200).json({ message: 'Actualizado correctamente'});
    } catch (error) {
        // La solicitud contiene sintaxis incorrecta o no puede ser procesada.
        return res.status(400).json({ message: error.message });
    }
}