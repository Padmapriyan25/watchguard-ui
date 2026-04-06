import { z } from 'zod';

export const RenewalActionSchema = z.object({
  title: z.string(),
  description: z.string(),
  iconId: z.string(),
  iconBg: z.string(),
});

export const RenewalBenefitSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export type RenewalAction = z.infer<typeof RenewalActionSchema>;
export type RenewalBenefit = z.infer<typeof RenewalBenefitSchema>;