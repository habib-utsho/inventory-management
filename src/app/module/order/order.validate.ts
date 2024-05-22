import { z } from 'zod';

// Define the order schema
const orderSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }).min(1, { message: 'Email is required' }),
  productId: z.string().min(1, { message: 'Product id is required' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  quantity: z.number().int().positive({ message: 'Quantity must be a positive integer' }),
});

// Validate function
const validateOrder = (data: unknown) => {
  return orderSchema.parse(data);
};

export { validateOrder, orderSchema };
