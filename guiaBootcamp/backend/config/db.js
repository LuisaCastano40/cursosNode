//1. importar las dependencias necesarias
import mongoose from 'mongoose'

const connectionMongo = async () => {

    //conexion base de datos
    await mongoose.connect(process.env.CONEXION_DB,{})
    //manejo de errores -> bloque try -catch
    try{
        console.log('Conexión Exitosa con la base de datos');
    }catch(error){
        console.error('Error de conexión: ', error.message)
    }
   
}

export default connectionMongo;