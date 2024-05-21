import express, { Request, Response, Router } from 'express'
import router from Router()


router.get('/', (req:Request,res:Response)=> {
    res.status(200).send({success: true, message: "All products are retrieved successfully!"})
})
router.post('/', (req:Request,res:Response)=> {
    res.status(200).send({success: true, message: "Product inserted successfully!"})
})
router.post('/:productId', (req:Request,res:Response)=> {
    const {productId} =req.params
    res.status(200).send({success: true, message: "The product is retrieved successfully!" + productId})
})
router.put('/:productId', (req:Request,res:Response)=> {
    const {productId} =req.params
    res.status(200).send({success: true, message: "Product updated successfully!" + productId})
})
router.put('/:productId', (req:Request,res:Response)=> {
    const {productId} =req.params
    res.status(200).send({success: true, message: "Product deleted successfully!" + productId})
})

