"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = exports.validateOrder = void 0;
const zod_1 = require("zod");
// Define the order schema
const orderSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: 'Invalid email address' }).min(1, { message: 'Email is required' }),
    productId: zod_1.z.string().min(1, { message: 'Product id is required' }),
    price: zod_1.z.number().positive({ message: 'Price must be a positive number' }),
    quantity: zod_1.z.number().int().positive({ message: 'Quantity must be a positive integer' }),
});
exports.orderSchema = orderSchema;
// Validate function
const validateOrder = (data) => {
    return orderSchema.parse(data);
};
exports.validateOrder = validateOrder;
