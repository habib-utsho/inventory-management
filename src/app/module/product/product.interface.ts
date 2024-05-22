type TProduct = {
  name: string
  description: string
  price: number
  category: string
  tags: string[]
  // TODO: confusion about values of variants
  variants: { type: string; value: string }[]
  inventory: { quantity: number; inStock: boolean }
}

export { TProduct }
