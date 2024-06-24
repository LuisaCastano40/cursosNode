//importamos mongoose -> Schema -> plantilla de los productos
import mongoose from 'mongoose';

const schema = mongoose.Schema;

//Estructrando cómo se van a guardar la información de los productos en nuestra db
//Schema es la plantilla
const productSchema = new schema({
    nombre:{
        type: String
    },
    imagen:{
        type: String
    },
    precio:{
        type: Number,
        require:true
    }
});

//Utilizamos esa plantilla para cear nuestro modelo -> creamos la coleccion donde se van a guardar los datos
//mongoose.model() -> crear nuestro modelo 
//1. nombre de la coleccion que me va a guartar los datos
//2. necesitamos darle como parámetro el schema que hicimos
export const productModel = mongoose.model('usuario', productSchema);


