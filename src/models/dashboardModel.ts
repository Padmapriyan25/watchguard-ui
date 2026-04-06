import { z } from 'zod';

export const DashboardMetricsSchema = z.object({
  activeCustomers: z.object({ count: z.number(), subtext: z.string() }),
  activeSubscriptions: z.object({ count: z.number(), subtext: z.string() }),
  totalLicenses: z.object({ count: z.number(), utilized: z.number(), available: z.number() }),
  outstandingBalance: z.object({ amount: z.number(), dueText: z.string() }),
  renewalsDue: z.object({ count: z.number(), nextDate: z.string() }),
});

export const SubscriptionSchema = z.object({
  id: z.string(),
  customer: z.string(),
  product: z.string(),
  productCode: z.string(),
  category: z.object({ type: z.string(), name: z.string() }),
  term: z.string(),
  licenses: z.number(),
  utilized: z.number(),
  status: z.enum(['Active', 'Expiring Soon', 'Expired']),
  autoRenew: z.boolean(),
  renewal: z.string(),
});

export const InvoiceSchema = z.object({
  id: z.string(),
  description: z.string(),
  details: z.string(),
  amount: z.number(),
  date: z.string(),
  status: z.enum(['Paid', 'Upcoming']),
});

export const HierarchyNodeSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    id: z.string(),
    name: z.string(),
    percentage: z.number(),
    color: z.string(),
    children: z.array(HierarchyNodeSchema).default([]),
  })
);

export const HierarchyDataSchema = z.object({
  root: HierarchyNodeSchema,
});

export type DashboardMetrics = z.infer<typeof DashboardMetricsSchema>;
export type Subscription = z.infer<typeof SubscriptionSchema>;
export type Invoice = z.infer<typeof InvoiceSchema>;
export type HierarchyNode = z.infer<typeof HierarchyNodeSchema>;
export type HierarchyData = z.infer<typeof HierarchyDataSchema>;
