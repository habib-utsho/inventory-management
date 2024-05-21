import mongoose, { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const orderSchema = new Schema<TProduct>({
  name: { type: String, required: [true, "Product name is required"] },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  price: { type: Number, required: [true, "Product number is required"] },
  category: { type: String, required: [true, "Product category is required"] },
  // TODO: confusion about values of variants
  tags: { type: [String], required: [true, "Product tags is required"] },
  variants: {
    type: [{ type: String, value: String }],
    required: [true, "Product variant is required"],
  },
  inventory: { type: { quantity: Number, inStock: Boolean } },
});

const OrderModel = model('order', orderSchema)

export default OrderModel