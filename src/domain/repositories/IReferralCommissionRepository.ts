import { ReferralCommission } from "../entities/ReferralCommission";

export interface IReferralCommissionRepository {
  create(
    data: Omit<ReferralCommission, "id" | "createdAt">
  ): Promise<ReferralCommission>;

  findByMentor(mentorId: string): Promise<ReferralCommission[]>;
  update(id: string, data: Partial<ReferralCommission>): Promise<ReferralCommission>;
}
