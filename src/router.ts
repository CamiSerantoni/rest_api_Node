import { Router } from "express";

const router = Router();


//Routing
router.get('/', (req, res) => {
    res.json('DESDE GET');
})

router.post('/', (req, res) => {
    res.json('DESDE post');
})

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