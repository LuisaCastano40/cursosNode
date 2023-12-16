//Archivo para conexión con base de datos mongo DB

// importamos mongoose según ES6
import mongoose from 'mongoose';

// DB local -> 'mongodb://localhost/nombre_db'

// const uri = 'mongodb://loise0607:0iRv6HawTbm64nYc@ac-zibplcw-shard-00-00.yxh93c6.mongodb.net:27017,ac-zibplcw-shard-00-01.yxh93c6.mongodb.net:27017,ac-zibplcw-shard-00-02.yxh93c6.mongodb.net:27017/productos?ssl=true&replicaSet=atlas-l2w7iy-shard-0&authSource=admin&retryWrites=true&w=majority';


// Creamos la función para realizar concexión a DB
const conexionMongo = async () => {
    // Es una promesa -> fn asíncrona -> manejo de errores con try y catch

    // se utiliza para conectar la aplicación Node.js a una instancia de MongoDB
    await mongoose.connect(process.env.DB_URL, {})
    try {
        console.log('Conexión exitosa');
    } catch (error) {
        console.error('Error de conexión:', error.message);
    }
}

// exportar nuestra función para poderla llamar desde nuestro servidor
export default conexionMongo;