import { ILongTermPlanRepository } from "../../domain/repositories/ILongTermPlanRepository";

export class LongTermPlanService {
  constructor(private readonly planRepo: ILongTermPlanRepository) {}

  async subscribe(data: Parameters<ILongTermPlanRepository["create"]>[0]) {
    return this.planRepo.create(data);
  }

  async update(id: string, data: any) {
    return this.planRepo.update(id, data);
  }

  async findByMentor(mentorId: string) {
    return this.planRepo.findByMentor(mentorId);
  }
}
