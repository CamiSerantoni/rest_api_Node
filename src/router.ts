import { Router } from "express";
import { createProduct, getProducts } from './handlers/product';
import { body } from "express-validator";
import { handleInputErrors } from "./middleware";

const router = Router();


//Routing
router.get('/',  getProducts)



router.post('/',  



    //Validaciones
   body('name').notEmpty().withMessage('El nombre del producto no puede ser vacío'),
                       
    body('price')
                .isNumeric().withMessage('El precio del Producto debe ser numerico')
                .not().isEmpty().withMessage('El precio del Producto no puede ser vacío') 
                .notEmpty().withMessage('El precio del producto no puede ser vacío')
                .custom(value => value > 0).withMessage('El precio debe ser mayor a 0'),
              handleInputErrors,
              createProduct
) 


router.put('/', (req, res) => {
    res.json('DESDE put');
})

router.patch('/', (req, res) => {
    res.json('DESDE patch');
})

router.delete('/', (req, res) => {
    res.json('DESDE delete');
})

export default router