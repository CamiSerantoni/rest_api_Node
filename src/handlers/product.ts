import { Request, Response } from 'express';
import Product from '../models/Product.model';



export const getProducts = async (req: Request, res: Response) => {
   try {
      //Para obtener datos es bueno usar finds
      const products = await Product.findAll({
         //si quieres darle orden a la respuesta 
         order: [['id', 'DESC']],
         //Si quieres que no se muestren ciertos elementos /campos   
         //attributes:{exclude: ['createdAt', 'updatedAt', 'availability']},
         //si quieres limitar la respuesta
         // limit: 2
      });
      res.json({ data: products });
   } catch (err) {
      console.log(err)
   }
}

export const getProductById = async (req: Request, res: Response) => {
   try {
      //Para obtener datos es bueno usar finds
    
      const { id } = req.params
      const product = await Product.findByPk(id);

      if (!product) {
         return res.status(404).json({ error: 'Producto no encontrado' })
      }

       res.json({ data: product });
      //si quieres darle orden a la respuesta 

      //Si quieres que no se muestren ciertos elementos /campos   
      //attributes:{exclude: ['createdAt', 'updatedAt', 'availability']},
      //si quieres limitar la respuesta
      // limit: 2

   } catch (err) {
      console.log(err)
   }

}



export const createProduct = async (req: Request, res: Response) => {
   try {
      const product = await Product.create(req.body);
      res.json({ data: product });
   } catch (err) {
      console.log(err)
   }
}

