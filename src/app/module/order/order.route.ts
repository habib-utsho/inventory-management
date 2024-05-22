import { Router } from 'express'
import {
  getAllOrdersController,
  insertOrderController,
} from './order.controller'

const router = Router()

router.post('/', insertOrderController)
router.get('/', getAllOrdersController)

export { router as orderRouter }
