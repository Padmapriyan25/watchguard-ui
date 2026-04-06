import { z } from 'zod';

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  accent: z.string(),
});

export const AddOnSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
});

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  priceTag: z.string(),
  priceValue: z.number(),
  priceUnit: z.string(),
  categoryId: z.string(),
  icon: z.enum(['flame', 'shield', 'globe', 'lock', 'cloud', 'monitor', 'search', 'user']),
  billingCycles: z.array(z.string()),
  termDiscounts: z.record(z.string(), z.number()),
  addOns: z.array(AddOnSchema),
});

export const PurchaseConfigSchema = z.object({
  termYears: z.number(),
  quantity: z.number(),
  billingCycle: z.string(),
  addOns: z.array(z.string()),
});

export const CartItemSchema = z.object({
  id: z.string(),
  productId: z.string(),
  name: z.string(),
  quantity: z.number(),
  termYears: z.number(),
  billingCycle: z.string(),
  addOns: z.array(z.string()),
  unitPrice: z.number(),
  subtotal: z.number(),
});

export const OrderTotalsSchema = z.object({
  subtotal: z.number(),
  tax: z.number(),
  total: z.number(),
});

export const PlacedOrderSchema = OrderTotalsSchema.extend({
  orderNumber: z.string(),
  customer: z.string(),
});

export type Category = z.infer<typeof CategorySchema>;
export type AddOn = z.infer<typeof AddOnSchema>;
export type Product = z.infer<typeof ProductSchema>;
export type PurchaseConfig = z.infer<typeof PurchaseConfigSchema>;
export type CartItem = z.infer<typeof CartItemSchema>;
export type OrderTotals = z.infer<typeof OrderTotalsSchema>;
export type PlacedOrder = z.infer<typeof PlacedOrderSchema>;
