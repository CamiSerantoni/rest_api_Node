import express from 'express';  
import productsRouter from './router';
import db from './config/db';


//Conectar a la base de datos
async function connectDB() {
    try {
await db.authenticate();
db.sync();
console.log('Conexion exitosa a la BD');
    }catch (error) {
console.log(error)
console.log('No se pudo conectar a la BD');
}
}


const server = express();

 server.use('/api/products', productsRouter);




export default server;