import mongoose, { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";
import ProductModel from "../product/product.model";

const orderSchema = new Schema<TOrder>({
  email: { type: String, required: [true, "Email is required"] },
  productId: { type: String, required: [true, "Product id is required"] },
  price: { type: Number, required: [true, "Price is required"] },
  quantity: { type: Number, required: [true, "Quantity is required"] },
});

//Middleware for decrease the product quantity after an order place

orderSchema.post<TOrder>("save", async function (doc, next) {
  try {
    const product = await ProductModel.findById(this.productId);
    if (product) {
      if (
        product.inventory?.quantity > 0 &&
        product.inventory?.quantity >= this.quantity
      ) {
        // Decrease the product quantity
        product.inventory.quantity -= this.quantity;
        // Update inStock status if the quantity becomes 0
        if (product.inventory.quantity === 0) {
          product.inventory.inStock = false;
        }
        product.save();
        next();
      } else {
        throw new Error("Insufficient inventory for the product");
      }
    } else {
      throw new Error("Product not found");
    }
  } catch (err: any) {
    next(err);
  }
});

const OrderModel = model("order", orderSchema);

export default OrderModel;
