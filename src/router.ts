import { Router } from "express";
import { createProduct } from "./handlers/product";
const router = Router();


//Routing
router.get('/', (req, res) => {
    res.json('DESDE GET');
})

router.post('/',  createProduct) 


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