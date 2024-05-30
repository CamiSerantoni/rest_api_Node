import express from 'express';  
import productsRouter from './router';
import db from './config/db';
import colors from 'colors';

//Conectar a la base de datos
async function connectDB() {
    try {
await db.authenticate();
db.sync();
console.log(colors.blue('Conexion exitosa a la BD'));
    }catch (error) {
// console.log(error)
console.log(colors.red.bold(  'No se pudo conectar a la BD'));
}
}

connectDB();


const server = express();


//Leer datos de formularios
server.use(express.json());




 server.use('/api/products', productsRouter);




export default server;