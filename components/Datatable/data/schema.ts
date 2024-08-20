import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
// export const taskSchema = z.object({
//   id: z.string(),
//   title: z.string(),
//   status: z.string(),
//   label: z.string(),
//   priority: z.string(),
// });

// export type Task = z.infer<typeof taskSchema>;

export const PartnershipSchema = z.object({
  partnershipName: z.string(),
  registrationNumber: z.string(),
  partnershipAddress: z.string(),
  dateOfIncorporation: z.string(),
  totalAuthorisedCapital: z.string(),
  generalPartnerName: z.string(),
  generalPartnerAddress: z.string(),
  representativeName: z.string(),
  representativeAddress: z.string(),
  representativeDateOfBirth: z.string(),
});
