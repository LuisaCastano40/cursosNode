import dotenv from 'dotenv';
import env from 'env-var';


dotenv.config();
//especificamos que es requerido, de tipo number
//const port = env.get('PORT').required().asPortNumber();
//especificamos que es de tipo number y un puerto por defecto
const port = env.get('PORT').default('5000').asPortNumber();

console.log(port);
console.log(process.env.PORT);