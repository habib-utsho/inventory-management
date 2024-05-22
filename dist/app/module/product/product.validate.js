"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = exports.validateProduct = void 0;
const zod_1 = require("zod");
// Define the variants schema
const variantsSchema = zod_1.z.object({
    type: zod_1.z.string().min(1, { message: 'Variant type is required' }),
    value: zod_1.z.string().min(1, { message: 'Variant value is required' }),
});
// Define the product schema
const productSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: 'Product name is required' }),
    description: zod_1.z.string().min(1, { message: 'Product description is required' }),
    price: zod_1.z.number().positive({ message: 'Product price must be a positive number' }),
    category: zod_1.z.string().min(1, { message: 'Product category is required' }),
    tags: zod_1.z.array(zod_1.z.string().min(1)).min(1, { message: 'Product tags are required' }),
    variants: zod_1.z.array(variantsSchema).min(1, { message: 'Product variants are required' }),
    inventory: zod_1.z.object({
        quantity: zod_1.z.number().nonnegative({ message: 'Inventory quantity must be a non-negative number' }),
        inStock: zod_1.z.boolean({ message: 'Inventory inStock must be a boolean' }),
    }),
});
exports.productSchema = productSchema;
// Validate function
const validateProduct = (data) => {
    return productSchema.parse(data);
};
exports.validateProduct = validateProduct;
