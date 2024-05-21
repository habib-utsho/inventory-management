import { Request, Response } from "express";
import { deleteAllProducts, deleteProductById, getAllProducts, getProductById, insertProductToDb } from "./product.service";


const getAllProductsController = async(req:Request, res:Response)=> {

    try{
        const data = await getAllProducts()
        if(data){
            res.status(200).send({success: true, message: "All products are retrieved successfully!", data})
        }
    }catch(e:any){
        res
        .status(400)
        .send({ success: true, message: e.message || 'Something is wrong', error: e })
    }


}
const insertProductController = async(req:Request, res:Response)=> {
    const product = req.body
    try{
        const data = await insertProductToDb(product)
        if(data){
            res.status(200).send({success: true, message: "Product inserted successfully!", data})
        }
    }catch(e:any){
        res
        .status(400)
        .send({ success: true, message: e.message || 'Something is wrong', error: e })
    }
}
const getSingleProductByIdController = async(req:Request, res:Response)=> {
    const {productId} = req.params
    try{
        const data = await getProductById(productId)
        if(data){
            res.status(200).send({success: true, message: "Product is retrieved successfully!", data})
        }
    }catch(e:any){
        res
        .status(400)
        .send({ success: true, message: e.message || 'Something is wrong', error: e })
    }
}
const updateProductByIdController = async(req:Request, res:Response)=> {
    const {productId} = req.params
    const product = req.body
    try{
        const data = await updateProductByIdController(productId, product)
        if(data){
            res.status(200).send({success: true, message: "Product is updated successfully!", data})
        }
    }catch(e:any){
        res
        .status(400)
        .send({ success: true, message: e.message || 'Something is wrong', error: e })
    }
}
const deleteProductByIdController = async(req:Request, res:Response)=> {
    const {productId} = req.params
    try{
        const data = await deleteProductById(productId)
        if(data){
            res.status(200).send({success: true, message: "Product is deleted successfully!", data})
        }
    }catch(e:any){
        res
        .status(400)
        .send({ success: true, message: e.message || 'Something is wrong', error: e })
    }
}
const deleteAllProductsController = async(req:Request, res:Response)=> {
    try{
        const data = await deleteAllProducts()
        if(data){
            res.status(200).send({success: true, message: "All products are deleted successfully!", data})
        }
    }catch(e:any){
        res
        .status(400)
        .send({ success: true, message: e.message || 'Something is wrong', error: e })
    }
}

export {getAllProductsController, insertProductController, getSingleProductByIdController, updateProductByIdController, deleteProductByIdController, deleteAllProductsController}