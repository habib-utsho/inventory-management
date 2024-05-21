import mongoose, { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
  order: { type: String, required: [true, "Product name is required"] },
});

const OrderModel = model('order', orderSchema)

export default OrderModel