import { TOrder } from './order.interface'
import OrderModel from './order.model'

const insertOrderToDb = async (order: TOrder) => {
  // Using static method
  // const result = await OrderModel.create(student)

  // Using instance method
  const result = new OrderModel(order)
  await result.save()

  return result
}
const getAllOrders = async (email: string) => {
  if (email) {
    const result = await OrderModel.find({ email })
    return result
  }
  const result = await OrderModel.find({})
  return result
}

export { getAllOrders, insertOrderToDb }
