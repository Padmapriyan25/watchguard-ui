import { z } from 'zod';

export const RenewalActionSchema = z.object({
  id: z.enum(['renew', 'add_seats', 'upgrade', 'browse']),
  title: z.string(),
  description: z.string(),
  iconId: z.string(),
  iconBg: z.string(),
});

export const RenewalBenefitSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const RenewalManagedSubscriptionSchema = z.object({
  id: z.string(),
  customer: z.string(),
  product: z.string(),
  category: z.string(),
  licenses: z.number(),
  utilized: z.number(),
  renewalDate: z.string(),
  renewalPrice: z.number(),
  seatPrice: z.number(),
});

export const RenewalTierPlanSchema = z.object({
  id: z.string(),
  name: z.string(),
  monthlyPrice: z.number(),
  features: z.array(z.string()),
  isCurrent: z.boolean(),
});

export type RenewalAction = z.infer<typeof RenewalActionSchema>;
export type RenewalBenefit = z.infer<typeof RenewalBenefitSchema>;
export type RenewalManagedSubscription = z.infer<typeof RenewalManagedSubscriptionSchema>;
export type RenewalTierPlan = z.infer<typeof RenewalTierPlanSchema>;
