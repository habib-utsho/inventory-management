import { Request, Response } from "express";


const getAllProductsController = (req:Request, res:Response)=> {
    res.status(200).send({success: true, message: "All products are retrieved successfully!"})
}
const insertProductController = (req:Request, res:Response)=> {
    res.status(200).send({success: true, message: "Product inserted successfully!"})
}
const getSingleProductByIdController = (req:Request, res:Response)=> {
    const {productId} =req.params
    res.status(200).send({success: true, message: "The product is retrieved successfully!" + productId})
}
const updateProductByIdController = (req:Request, res:Response)=> {
    const {productId} =req.params
    res.status(200).send({success: true, message: "Product updated successfully!" + productId})
}
const deleteProductByIdController = (req:Request, res:Response)=> {
    const {productId} =req.params
    res.status(200).send({success: true, message: "Product delete successfully!" + productId})
}