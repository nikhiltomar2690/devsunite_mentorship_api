import { LongTermPlan } from "../entities/LongTermPlan";

export interface ILongTermPlanRepository {
  create(data: Omit<LongTermPlan, "id">): Promise<LongTermPlan>;
  findById(id: string): Promise<LongTermPlan | null>;
  findByMentee(menteeId: string): Promise<LongTermPlan[]>;
  findByMentor(mentorId: string): Promise<LongTermPlan[]>;
  update(id: string, data: Partial<LongTermPlan>): Promise<LongTermPlan>;
}
