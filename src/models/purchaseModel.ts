import { z } from 'zod';

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  priceTag: z.string(),
  priceValue: z.number(),
  priceUnit: z.string(),
  categoryId: z.string(),
});

export type Category = z.infer<typeof CategorySchema>;
export type Product = z.infer<typeof ProductSchema>;
