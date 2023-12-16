import productsModel from "../models/product.model.js";


// Controlador para mostrar todos los productos
export const getProduct = async (req, res) => {
    try{
        let products = await productsModel.find();
        return res.send(products);
    }catch(error){
        return res.json({ error: error });
    }
}


export const postProduct = async (req, res) => {
    try{
        let productData = req.body;
        let newProduct = await productsModel.create(productData);
        return res.json(newProduct);
    }catch(error){
        return res.json({ error: error });
    }
}
export const putProduct = async (req, res) => {
    try {
        let dataForUpdate = req.body;
        let idForUpdate = req.params._id;
        await productsModel.findByIdAndUpdate(idForUpdate, dataForUpdate);
        return res.json({ msg: "Actualizado correctamente" });
    } catch (e) {
        return res.json({ error: e });
    }
}
export const deleteProduct = async (req, res) => {
    try {
        let idForDelete = req.params._id
        let productDelete = await productsModel.findByIdAndDelete(idForDelete)
        if (productDelete) {
            return res.json({ msg: "Eliminado Correctamente" })
        } else {
            return res.json({ msg: "No elimine nada" })
        }

    } catch (e) {
        return res.json({ error: e })
    }
}


//prueba inicial
// export const getProduct = async (req, res) => {
//     return res.send('Funciona la petición GET')
// }
// export const postProduct = async (req, res) => {
//     return res.send('Funciona la petición POST')
// }
// export const putProduct = async (req, res) => {
//     return res.send('Funciona la petición PUT')
// }
// export const deleteProduct = async (req, res) => {
//     return res.send('Funciona la petición DELETE')
// }