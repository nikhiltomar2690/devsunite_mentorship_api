import { IReferralCommissionRepository } from "../../domain/repositories/IReferralCommissionRepository";

export class ReferralCommissionService {
  constructor(private readonly referralRepo: IReferralCommissionRepository) {}

  async create(data: Parameters<IReferralCommissionRepository["create"]>[0]) {
    return this.referralRepo.create(data);
  }

  async addEarnings(id: string, amount: number) {
    return this.referralRepo.update(id, {
      totalEarned: amount,
    });
  }

  async getByMentor(mentorId: string) {
    return this.referralRepo.findByMentor(mentorId);
  }
}
