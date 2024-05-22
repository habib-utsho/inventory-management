import { z } from 'zod';

// Define the variants schema
const variantsSchema = z.object({
  type: z.string().min(1, { message: 'Variant type is required' }),
  value: z.string().min(1, { message: 'Variant value is required' }),
});

// Define the product schema
const productSchema = z.object({
  name: z.string().min(1, { message: 'Product name is required' }),
  description: z.string().min(1, { message: 'Product description is required' }),
  price: z.number().positive({ message: 'Product price must be a positive number' }),
  category: z.string().min(1, { message: 'Product category is required' }),
  tags: z.array(z.string().min(1)).min(1, { message: 'Product tags are required' }),
  variants: z.array(variantsSchema).min(1, { message: 'Product variants are required' }),
  inventory: z.object({
    quantity: z.number().nonnegative({ message: 'Inventory quantity must be a non-negative number' }),
    inStock: z.boolean({ message: 'Inventory inStock must be a boolean' }),
  }),
});

// Validate function
const validateProduct = (data: unknown) => {
  return productSchema.parse(data);
};

export { validateProduct, productSchema };
