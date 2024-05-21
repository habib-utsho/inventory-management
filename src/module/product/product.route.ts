import { Router } from 'express'
const router =  Router()
import { deleteAllProductsController, deleteProductByIdController, getAllProductsController, getSingleProductByIdController, insertProductController, updateProductByIdController } from './product.controller'


router.post('/', insertProductController)
router.get('/', getAllProductsController)
router.get('/:productId', getSingleProductByIdController)
router.put('/:productId', updateProductByIdController)
router.delete('/:productId', deleteProductByIdController)
router.delete('/', deleteAllProductsController)

export {router as productRouter}