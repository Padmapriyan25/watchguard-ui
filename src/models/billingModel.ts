import { z } from 'zod';

export const BillingInvoiceSchema = z.object({
  customer: z.string(),
  id: z.string(),
  date: z.string(),
  description: z.string(),
  amount: z.string(),
  status: z.enum(['Paid', 'Outstanding']),
});

export const BillingAddressSchema = z.object({
  company: z.string(),
  lines: z.array(z.string()),
});

export const PaymentMethodSchema = z.object({
  type: z.string(),
  last4: z.string(),
  expiry: z.string(),
  isDefault: z.boolean(),
});

export const BillingSummarySchema = z.object({
  currentBalance: z.string(),
  lastPaymentAmount: z.string(),
  lastPaymentDate: z.string(),
  nextInvoiceDue: z.string(),
});

export type BillingInvoice = z.infer<typeof BillingInvoiceSchema>;
export type BillingAddress = z.infer<typeof BillingAddressSchema>;
export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;
export type BillingSummary = z.infer<typeof BillingSummarySchema>;