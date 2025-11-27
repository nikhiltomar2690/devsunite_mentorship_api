export interface ReferralCommission {
  id: string;
  referredMentorId: string;
  referringMentorId: string;

  commissionRate: number; // default 2%
  totalEarned: number;

  createdAt: Date;
}
