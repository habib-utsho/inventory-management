import { Request, Response } from 'express'
import {
  deleteAllProducts,
  deleteProductById,
  getAllProducts,
  getProductById,
  insertProductToDb,
  updateProductById,
} from './product.service'
import { validateProduct } from './product.validate'

const getAllProductsController = async (req: Request, res: Response) => {
  try {
    const data = await getAllProducts()
    if (data) {
      res.status(200).send({
        success: true,
        message: 'Products fetched successfully!',
        data,
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Products not found!',
        data,
      })
    }
  } catch (e: any) {
    res.status(400).send({
      success: false,
      message: e.message || 'Something is wrong',
      error: e,
    })
  }
}
const insertProductController = async (req: Request, res: Response) => {
  const product = req.body
  try {
    const zodProductValidateSchema = validateProduct(product)

    const data = await insertProductToDb(zodProductValidateSchema)
    if (data) {
      res.status(200).send({
        success: true,
        message: 'Product created successfully!',
        data,
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Product not created!',
        data,
      })
    }
  } catch (e: any) {
    res.status(400).send({
      success: false,
      message: e.message || 'Something is wrong',
      error: e,
    })
  }
}
const getSingleProductByIdController = async (req: Request, res: Response) => {
  const { productId } = req.params
  try {
    const data = await getProductById(productId)
    if (data) {
      res.status(200).send({
        success: true,
        message: 'Product fetched successfully!',
        data,
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Product not found!',
        data,
      })
    }
  } catch (e: any) {
    res.status(400).send({
      success: false,
      message: e.message || 'Something is wrong',
      error: e,
    })
  }
}
const updateProductByIdController = async (req: Request, res: Response) => {
  const { productId } = req.params
  const product = req.body
  try {
    const data = await updateProductById(productId, product)
    if (data) {
      res.status(200).send({
        success: true,
        message: 'Product updated successfully!',
        data,
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Product not found to update!',
        data,
      })
    }
  } catch (e: any) {
    res.status(400).send({
      success: false,
      message: e.message || 'Something is wrong',
      error: e,
    })
  }
}
const deleteProductByIdController = async (req: Request, res: Response) => {
  const { productId } = req.params
  try {
    const data = await deleteProductById(productId)
    if (data) {
      res.status(200).send({
        success: true,
        message: 'Product deleted successfully!',
        data,
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Product not found to delete!',
        data,
      })
    }
  } catch (e: any) {
    res.status(400).send({
      success: false,
      message: e.message || 'Something is wrong',
      error: e,
    })
  }
}
const deleteAllProductsController = async (req: Request, res: Response) => {
  try {
    const data = await deleteAllProducts()
    if (data) {
      res.status(200).send({
        success: true,
        message: 'All products are deleted successfully!',
        data,
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Products not found to delete!',
        data,
      })
    }
  } catch (e: any) {
    res.status(400).send({
      success: false,
      message: e.message || 'Something is wrong',
      error: e,
    })
  }
}

export {
  getAllProductsController,
  insertProductController,
  getSingleProductByIdController,
  updateProductByIdController,
  deleteProductByIdController,
  deleteAllProductsController,
}
